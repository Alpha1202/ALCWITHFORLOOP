"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OrdersModel =
/*#__PURE__*/
function () {
  function OrdersModel() {
    _classCallCheck(this, OrdersModel);

    this.order = [{
      id: 1,
      name: 'Beans',
      Description: 'lorem ipsum',
      price: 300,
      quantity: 'large'
    }, {
      id: 2,
      name: 'Rice',
      Description: 'lorem ipsum',
      price: 300,
      quantity: 'large'
    }, {
      id: 3,
      name: 'Yam',
      Description: 'lorem ipsum',
      price: 300,
      quantity: 'large'
    }];
  }

  _createClass(OrdersModel, [{
    key: "getOrders",
    value: function getOrders() {
      return this.order;
    }
  }, {
    key: "createOrder",
    value: function createOrder(OrderData) {
      var order = {
        id: this.order.length + 1,
        name: OrderData.name,
        Description: OrderData.Description,
        price: OrderData.price,
        quantity: OrderData.quantity
      };
      this.order.push(order);
      return order;
    }
  }, {
    key: "getAnOrder",
    value: function getAnOrder(id) {
      var anOrder = this.order.find(function (order) {
        return order.id === id;
      });
      return anOrder;
    }
  }, {
    key: "updateOrder",
    value: function updateOrder(id, orderData) {
      var order = this.order.find(function (anorder) {
        return anorder.id === id;
      });
      order.id = this.order.length + 1;
      order.name = orderData.name || order.name;
      order.price = orderData.price || order.price;
      order.quantity = orderData.quantity || order.quantity;
      return order;
    }
  }, {
    key: "deleteOrder",
    value: function deleteOrder(id) {
      var order = this.order.find(function (anorder) {
        return anorder.id === id;
      });
      var orderIndex = this.order.indexOf(order);
      this.order.splice(orderIndex, 1);
      return order;
    }
  }]);

  return OrdersModel;
}();

exports.default = OrdersModel;
//# sourceMappingURL=OrderModel.js.map