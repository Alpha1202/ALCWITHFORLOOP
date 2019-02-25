"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MenusModel =
/*#__PURE__*/
function () {
  function MenusModel() {
    _classCallCheck(this, MenusModel);

    this.menu = [{
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

  _createClass(MenusModel, [{
    key: "getMenu",
    value: function getMenu() {
      return this.menu;
    }
  }, {
    key: "createMenu",
    value: function createMenu(menuData) {
      var menu = {
        id: this.menu.length + 1,
        name: menuData.name,
        Description: menuData.Description,
        price: menuData.price,
        quantity: menuData.quantity
      };
      this.menu.push(menu);
      return menu;
    }
  }, {
    key: "updateMenu",
    value: function updateMenu(id, menuData) {
      var menu = this.menu.find(function (amenu) {
        return amenu.id === id;
      });
      menu.id = this.menu.length + 1;
      menu.name = menuData.name || menu.name;
      menu.price = menuData.price || menu.price;
      menu.quantity = menuData.quantity || menu.quantity;
      return menu;
    }
  }, {
    key: "deleteMenu",
    value: function deleteMenu(id) {
      var menu = this.menu.find(function (amenu) {
        return amenu.id === id;
      });
      var menuIndex = this.menu.indexOf(menu);
      this.menu.splice(menuIndex, 1);
      return menu;
    }
  }]);

  return MenusModel;
}();

exports.default = MenusModel;
//# sourceMappingURL=menuModel.js.map