"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _menuModel = _interopRequireDefault(require("../models/menuModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function validateMenu(menu) {
  var schema = {
    name: _joi.default.string().min(2).required(),
    Description: _joi.default.string().min(5).required(),
    price: _joi.default.number().required().required(),
    quantity: _joi.default.string().required()
  };
  return _joi.default.validate(menu, schema);
}

var menu = new _menuModel.default();

var MenuController =
/*#__PURE__*/
function () {
  function MenuController() {
    _classCallCheck(this, MenuController);
  }

  _createClass(MenuController, null, [{
    key: "getAllMenu",

    /**
    * Get the day's Menu
    * @param {object} req
    * @param {object} res
    * @return {object} menu
    */
    value: function getAllMenu(req, res) {
      var amenu = menu.getMenu();

      if (amenu === undefined || amenu.length === 0) {
        return res.status(204).send({
          message: 'No Menu for today'
        });
      }

      return res.status(200).send(amenu);
    }
    /**
     * Create a new menu
     * @param {object} req
     * @param {object} res
     * @return {object} created menu || all inputs are required
     */

  }, {
    key: "createMenu",
    value: function createMenu(req, res) {
      var _validateMenu = validateMenu(req.body),
          error = _validateMenu.error;

      if (error) return res.status(400).send(error.details[0].message);
      var newmenu = menu.createMenu(req.body);
      newmenu.name = req.body.name.trim();
      newmenu.Description = req.body.Description;
      newmenu.price = req.body.price;
      newmenu.quantity = req.body.quantity;
      return res.status(201).send(newmenu);
    }
  }]);

  return MenuController;
}();

exports.default = MenuController;
//# sourceMappingURL=menuControllers.js.map