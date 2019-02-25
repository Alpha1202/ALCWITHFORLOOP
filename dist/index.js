"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _mealsController = _interopRequireDefault(require("./controllers/mealsController"));

var _menuControllers = _interopRequireDefault(require("./controllers/menuControllers"));

var _OrderControllers = _interopRequireDefault(require("./controllers/OrderControllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', function (req, res) {
  res.status(200).send({
    message: 'Server is running'
  });
});
app.get('/api/v1/meals', _mealsController.default.getAllMeals);
app.post('/api/v1/meals', _mealsController.default.createMeal);
app.get('/api/v1/meals/:id', _mealsController.default.getAmeal);
app.put('/api/v1/meals/:id', _mealsController.default.updateMeal);
app.delete('/api/v1/meals/:id', _mealsController.default.deleteMeal);
app.post('/api/v1/menu', _menuControllers.default.createMenu);
app.get('/api/v1/menu', _menuControllers.default.getAllMenu);
app.post('/api/v1/orders', _OrderControllers.default.createOrder);
app.put('/api/v1/orders/:id', _OrderControllers.default.updateOrder);
app.get('/api/v1/orders', _OrderControllers.default.getAllOrders);
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map