import MenusModel from '../models/menuModel';

const menu = new MenusModel();
export default class MenuController {
  /**
  * Get the day's Menu
  * @param {object} req
  * @param {object} res
  * @return {object} menu
  */
  static getMenu(req, res) {
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
    if (!req.body.id && !req.body.name && !req.body.price && !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    } if (!req.body.id || !req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    }
    const newmenu = menu.createMenu(req.body);
    newmenu.id = req.body.id;
    newmenu.name = req.body.name.trim();
    newmenu.price = req.body.price;
    newmenu.quantity = req.body.quantity;

    return res.status(201).send(newmenu);
  }

}