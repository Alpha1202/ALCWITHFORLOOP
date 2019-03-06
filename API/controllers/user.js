import db from '../models';

export default class UsersController {
  /**
    * Create a user
    * @param {object} req
    * @param {object} res
    * @return {object} a new user
    */
  static signup(req, res) {
    db.user.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    }).then((outcome) => {
      res.json(outcome);
    });
  }

  /**
    * Login  a user
    * @param {object} req
    * @param {object} res
    * @return {object} user logged in
    */
  static login(req, res) {
    db.user.findOne({
      where: {
        email: req.params.email,
      },
    }).then((outcome) => {
      res.json(outcome);
    });
  }
}
