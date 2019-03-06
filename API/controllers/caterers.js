import db from '../models';

export default class CaterersController {
  /**
    * Create a caterer
    * @param {object} req
    * @param {object} res
    * @return {object} a new caterer
    */
  static signup(req, res) {
    db.Caterer.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    }).then((outcome) => {
      res.json(outcome);
    });
  }

  /**
    * Login  a caterer
    * @param {object} req
    * @param {object} res
    * @return {object} caterer logged in
    */
  static login(req, res) {
    db.Caterer.findOne({
      where: {
        email: req.params.email,
      },
    }).then((outcome) => {
      res.json(outcome);
    });
  }
}
