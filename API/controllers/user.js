import db from '../../models';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import bcrypt from 'bcrypt';

config();

const secret = process.env.JWT_SECRET;


export default class UsersController {
  /**
    * Create a user
    * @param {object} req
    * @param {object} res
    * @return {object} a new user
    */
  static async signup(req, res) {
    try {
      const { name, email, phone, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 8);
      const User = await db.user.create({ name, email, phone, password: hashedPassword });
      const newUser = {
        id: User.id,
        name: User.name,
        email: User.email,
        phone: User.phone,
        password: User.password,
      };
      const jwttoken = jwt.sign({ user: newUser }, secret, {
        expiresIn: 86400
      });
      return res.status(200).send({
        message: 'Signup successful',
        token: jwttoken,
        newUser,
      });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  }

  /**
    * Login  a user
    * @param {object} req
    * @param {object} res
    * @return {json} user logged in
    */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const User = await db.user.findOne({
        where: { email } });
      if (!User) {
        throw new Error('Email does not exist');
      }
      const outcome = await bcrypt.compare(password, User.password);
      if (!outcome) {
        throw new Error('Wrong Password');
      }
      const verifiedUser = {
        id: User.id,
        name: User.name,
        email: User.email,
        phone: User.phone,
        password: User.password,
      };
      const jwttoken = jwt.sign({ user: verifiedUser }, secret, {
        expiresIn: 86400
      });
      return res.status(200).json({
        message: 'Login successful',
        token: jwttoken,
        User: verifiedUser,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}
