import db from '../../models';

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
      const Caterer = await db.caterer.create({
        name,
        email,
        phone,
        password,
      });
      const newCaterer = {
        id: Caterer.id,
        name: Caterer.name,
        email: Caterer.email,
        phone: Caterer.phone,
        password: Caterer.password,
      };
      return res.status(201).send({
        message: 'sign successful',
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
      const verifiedCaterer = {
        id: Caterer.id,
        name: Caterer.name,
        email: Caterer.email,
        phone: Caterer.phone,
        password: Caterer.password,
      }
      return res.status(200).json({
        message: 'Login successful',
        User: verifiedCaterer,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}
