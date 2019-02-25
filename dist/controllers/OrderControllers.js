"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _OrderModel = _interopRequireDefault(require("../models/OrderModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function validateOrder(order) {
  var schema = {
    name: _joi.default.string().min(2).required(),
    Description: _joi.default.string().min(5).required(),
    price: _joi.default.number().required().required(),
    quantity: _joi.default.string().required()
  };
  return _joi.default.validate(order, schema);
}

var order = new _OrderModel.default();

var OrdersController =
/*#__PURE__*/
function () {
  function OrdersController() {
    _classCallCheck(this, OrdersController);
  }

  _createClass(OrdersController, null, [{
    key: "getAllOrders",

    /**
    * Get All Orders
    * @param {object} req
    * @param {object} res
    * @return {object} all orders
    */
    value: function getAllOrders(req, res) {
      var orders = order.getOrders();

      if (orders === undefined || orders.length === 0) {
        return res.status(204).send({
          message: 'No Orders'
        });
      }

      return res.status(200).send(orders);
    }
    /**
     * Create a new order
     * @param {object} req
     * @param {object} res
     * @return {object} created order || all inputs are required
     */

  }, {
    key: "createOrder",
    value: function createOrder(req, res) {
      var _validateOrder = validateOrder(req.body),
          error = _validateOrder.error;

      if (error) return res.status(400).send(error.details[0].message);
      var neworder = order.createOrder(req.body);
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

  }, {
    key: "updateOrder",
    value: function updateOrder(req, res) {
      var orders = order.getOrders();
      var upOrder = orders.find(function (anOrder) {
        return anOrder.id === parseInt(req.params.id);
      });
      if (!upOrder) return res.status(404).send({
        message: 'Order Not Found'
      });

      var _validateOrder2 = validateOrder(req.body),
          error = _validateOrder2.error;

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

  }, {
    key: "deleteOrder",
    value: function deleteOrder(req, res) {
      var orders = order.getOrders();
      var neworder = orders.find(function (someorder) {
        return someorder.id === parseInt(req.params.id);
      });
      if (!neworder) res.status(404).send({
        message: 'Order Not found'
      });
      var OrderIndex = orders.indexOf(neworder);
      orders.splice(OrderIndex, 1);
      return res.status(204).send(neworder);
    }
  }]);

  return OrdersController;
}();

exports.default = OrdersController;
//# sourceMappingURL=OrderControllers.js.map