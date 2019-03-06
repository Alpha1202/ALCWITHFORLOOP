import db from '../models';
import OrderItem from '../models/OrderItem';
import Meals from '../models/Meals';
import Menu from '../models/Menu';

export default class OrdersController {
  /**
  * Get All Orders
  * @param {object} req
  * @param {object} res
  * @return {object} all orders
  */
  static getAll(req, res) {
    db.order.findAll({}).then((outcome) => {
      res.json(outcome);
    });
  }

  /**
   * Create a new order
   * @param {object} req
   * @param {object} res
   * @return {object} created order || all inputs are required
   */
  static create(req, res) {
    db.order.create({
      order: req.body.order,
      total: req.body.total,
      address: req.body.address,
      delivery_status: 0,
    }).then((outcome) => {
      res.json(outcome);
    });
  }

  /**
    * Update order info
    * @param {object} req
    * @param {object} res
    * @return {object} updated order
    */
  static update(req, res) {
    db.order.update({
      order: req.body.order,
    }, {
      where: {
        id: req.params.id,
      },
    }).then((outcome) => {
      res.send({ successful: 'true', message: 'update successful' });
    });
  }

  /**
    * delete a order option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted order || order not found
    */
  static delete(req, res) {
    db.order.destroy({
      where: {
        id: req.params.id,
      },
    }).then((outcome) => {
      res.send({ successful: 'true', message: 'delete successful' });
    });
  }
}
