import db from '../../models';

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
      const User = await db.user.create({ name, email, phone, password });
      const newUser = {
        id: User.id,
        name: User.name,
        email: User.email,
        phone: User.phone,
        password: User.password,
      };
      return res.status(200).send(
        newUser,
      );
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      })
    }
  }

  /**
    * Login  a user
    * @param {object} req
    * @param {object} res
    * @return {object} user logged in
    */
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const User = await db.user.findOne({
        where: { email } });
      if (!User) {
        throw new Error('Email does not exist');
      }
      const verifiedUser = {
        id: User.id,
        name: User.name,
        email: User.email,
        phone: User.phone,
        password: User.password,
      };
      return res.status(200).json({
        message: 'Login successful',
        User: verifiedUser,
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }
}
