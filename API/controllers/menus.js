import db from '../../models';

export default class MenusController {
/**
  * Get a day's date 
  * @param {object} date
  * @param {object} month
  * @param {object} year
  * @return {object} day's date
  */

  static getDate() {
    const date = new Date();
    const month = `${date.getMonth() + 1}`; 
    const day = `${date.getFullYear()}-${month.padStart(2, '0')}-${date.getDate()}`;
    return day;
  
  }

  /**
  * Get the all day's Menu
  * @param {object} req
  * @param {object} res
  * @return {object} menu
  */
  static async getAll(req, res) {
    const day = MenusController.getDate();
    const allMenu = await db.Menu.findAll({ where: { createdAt: day } });
    if (allMenu === undefined || allMenu.length === 0) {
      return res.status(204).send({ message: 'No Menu for today' });
    }
    return res.status(200).send(allMenu);
  }

  /**
   * get a menu
   * @param {object} req
   * @param {object} res
   * @return {object} a menu
   */
  static async getAmenu(req, res) {
    const day = MenusController.getDate();
    const menu = await db.Menu.findOne({ where: { createdAt: day, catererId: req.caterer.id } });
    if (menu === undefined || menu.length === 0) {
      return res.status(204).send({ message: 'Menu does not exist' });
    }
    return res.status(200).send(menu);
  }

  /**
   * Create a new menu
   * @param {object} req
   * @param {object} res
   * @return {object} created menu || all inputs are required
   */
  static async create(req, res) {
    try {
      const { meals, catererId } = req.body;
      const menu = await db.Menu.create({ meals, catererId });
      const newMenu = {
        id: menu.id,
        meals: menu.meals,
        catererId: menu.catererId,
      };
      return res.status(200).send(
        newMenu,
      );
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      })
    }
  }
}
