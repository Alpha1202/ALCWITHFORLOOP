import Joi from 'joi';
import OrdersModel from '../models/OrderModel';

function validateOrder(order) {
  const schema = {
    name: Joi.string().min(2).required(),
    Description: Joi.string().min(5).required(),
    price: Joi.number().required().required(),
    quantity: Joi.string().required(),
  };

  return Joi.validate(order, schema);
}

const order = new OrdersModel();
export default class OrdersController {
  /**
  * Get All Orders
  * @param {object} req
  * @param {object} res
  * @return {object} all orders
  */
  static getAllOrders(req, res) {
    const orders = order.getOrders();
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
    const { error } = validateOrder(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const neworder = order.createOrder(req.body);
    neworder.name = req.body.name.trim();
    neworder.Description = req.body.Description;
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
    const orders = order.getOrders();
    const upOrder = orders.find(anOrder => anOrder.id === parseInt(req.params.id));
    if (!upOrder) return res.status(404).send({ message: 'Order Not Found' });
    const { error } = validateOrder(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    upOrder.name = req.body.name;
    upOrder.Description = req.body.Description;
    upOrder.price = req.body.price;
    upOrder.quantity = req.body.quantity;
    return res.status(200).json(upOrder);
  }

  /**
    * delete a order option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted order || order not found
    */
  static deleteOrder(req, res) {
    const orders = order.getOrders();
    const neworder = orders.find(someorder => someorder.id === parseInt(req.params.id));
    if (!neworder) res.status(404).send({ message: 'Order Not found' });

    const OrderIndex = orders.indexOf(neworder);
    orders.splice(OrderIndex, 1);
    return res.status(204).send(neworder);
  }
}
