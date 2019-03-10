import db from '../../models';

export default class OrdersController {
  /**
  * Get All Orders
  * @param {object} req
  * @param {object} res
  * @return {object} all orders
  */
  static async getAll(req, res) {
    try {
      const Order = await db.order.findAll({ where: { catererId: req.caterer.id } });
      return res.status(200).send(Order);
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  }

  /**
   * Create a new order
   * @param {object} req
   * @param {object} res
   * @return {object} created order || all inputs are required
   */
  static async create(req, res) {
    try {
      const Order = await db.order.create({
        order: req.body.order,
        total: req.body.total,
        address: req.body.address,
        delivery_status: 0,
      })
      return res.status(200).send(Order);
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      })
    }
  }

  /**
    * Update order info
    * @param {object} req
    * @param {object} res
    * @return {object} updated order
    */
  static async update(req, res) {
    try {
      const Order = await db.order.update({
        order: req.body.order,
      }, {
        where: {
          id: req.params.id,
        } })
      return res.send(Order);
    }
    catch (err) {
      return res.status(500).send({
        message: err.message,
      })
    }
  }

  /**
    * delete a order option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted order || order not found
    */
  static async delete(req, res) {
    try {
      await db.order.destroy({
        where: {
          id: req.params.id,
        } })
      return res.status(200).send({ message: 'delete successful' });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      })
    }
  }
}
