import OrdersModel from '../models/OrderModel';

const order = new OrdersModel();
export default class OrdersController {
  /**
  * Get All Orders
  * @param {object} req
  * @param {object} res
  * @return {object} all orders
  */
  static getAllOrders(req, res) {
    const orders = order.getAnOrder();
    if (orders === undefined || orders.length === 0) {
      return res.status(204).send({ message: 'No Orders' });
    }
    return res.status(200).send(orders);
  }

  /**
   * Create a new order
   * @param {object} req
   * @param {object} res
   * @return {object} created order || all inputs are required
   */
  static createOrder(req, res) {
    if (!req.body.id && !req.body.name && !req.body.price && !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    } if (!req.body.id || !req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    }
    const neworder = order.createOrder(req.body);
    neworder.id = req.body.id;
    neworder.name = req.body.name.trim();
    neworder.price = req.body.price;
    neworder.quantity = req.body.quantity;

    return res.status(201).send(neworder);
  }

  /**
    * Update order info
    * @param {object} req
    * @param {object} res
    * @return {object} updated order
    */
  static updateOrder(req, res) {
    const orders = order.getAnOrder(req.params.id);
    // const upOrder = order.find(anOrder => anOrder.id === req.param.id);
    if (!orders) {
      return res.status(404).send({ message: 'Order Not Found' });
    }
    const updateOrder = order.createOrder(req.params.id, req.body);
    return res.status(200).json(updateOrder);
  }

  /**
    * delete a order option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted order || order not found
    */
  static deleteOrder(req, res) {
    const orders = order.deleteOrder(req.params.id);
    if (!orders) {
      return res.status(404).send({ message: 'Order Not found' });
    }
    const deleted = order.deleteOrder(req.param.id);
    return res.status(204).send(deleted);
  }
}
