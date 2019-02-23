import Joi from 'joi';
import MenusModel from '../models/menuModel';

function validateMenu(menu) {
  const schema = {
    name: Joi.string().min(2).required(),
    Description: Joi.string().min(5).required(),
    price: Joi.number().required().required(),
    quantity: Joi.string().required(),
  };

  return Joi.validate(menu, schema);
}

const menu = new MenusModel();
export default class MenuController {
  /**
  * Get the day's Menu
  * @param {object} req
  * @param {object} res
  * @return {object} menu
  */
  static getAllMenu(req, res) {
    const amenu = menu.getMenu();
    if (amenu === undefined || amenu.length === 0) {
      return res.status(204).send({ message: 'No Menu for today' });
    }
    return res.status(200).send(amenu);
  }

  /**
   * Create a new menu
   * @param {object} req
   * @param {object} res
   * @return {object} created menu || all inputs are required
   */
  static createMenu(req, res) {
    const { error } = validateMenu(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newmenu = menu.createMenu(req.body);
    newmenu.name = req.body.name.trim();
    newmenu.Description = req.body.Description;
    newmenu.price = req.body.price;
    newmenu.quantity = req.body.quantity;

    return res.status(201).send(newmenu);
  }
}
