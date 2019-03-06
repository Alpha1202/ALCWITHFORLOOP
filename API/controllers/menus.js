import db from '../models';

export default class MenusController {
  /**
  * Get the day's Menu
  * @param {object} req
  * @param {object} res
  * @return {object} menu
  */
  static getAll(req, res) {
    db.Menu.findAll({}).then((outcome) => {
      res.json(outcome);
    });
  }

  /**
   * Create a new menu
   * @param {object} req
   * @param {object} res
   * @return {object} created menu || all inputs are required
   */
  static create(req, res) {
    db.Menu.create({
      meals: req.body.meals,
      catererId: req.body.catererId,
    }).then((outcome) => {
      res.json(outcome);
    });
  }
}
