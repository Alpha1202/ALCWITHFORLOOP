import db from '../../models';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import bcrypt from 'bcrypt';

config();

const secret = process.env.JWT_SECRET;

export default class CaterersController {
  /**
    * Create a caterer
    * @param {object} req
    * @param {object} res
    * @return {object} a new caterer
    */
  static async signup(req, res) {
    try {
      const { name, email, phone, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 8);
      const Caterer = await db.caterer.create({
        name,
        email,
        phone,
        password: hashedPassword,
      });
      const newCaterer = {
        id: Caterer.id,
        name: Caterer.name,
        email: Caterer.email,
        phone: Caterer.phone,
        password: Caterer.password,
      };
      const jwttoken = jwt.sign({ caterer: newCaterer, isCaterer: true }, secret, {
        expiresIn: 86400
      });
      return res.status(201).send({
        message: 'signup successful',
        token: jwttoken,
        newCaterer,
      });
    } catch (err) {
      res.status(500).send({
        message: err.message,
      });
    }
  }

  /**
    * Login  a caterer
    * @param {object} req
    * @param {object} res
    * @return {object} caterer logged in
    */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const Caterer = await db.caterer.findOne({
        where: { email } });
      if (!Caterer) {
        throw new Error ('Email does not exist');
      }
      const outcome = await bcrypt.compare(password, Caterer.password);
      if (!outcome) {
        throw new Error('Wrong Password');
      }
      const verifiedCaterer = {
        id: Caterer.id,
        name: Caterer.name,
        email: Caterer.email,
        phone: Caterer.phone,
        password: Caterer.password,
      };
      const jwttoken = jwt.sign({ caterer: safeCaterer, isCaterer: true }, secret, {
        expiresIn: 86400
      });
      return res.status(200).json({
        message: 'Login successful',
        token: jwttoken,
        User: verifiedCaterer,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}
