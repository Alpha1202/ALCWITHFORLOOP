"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MealsModel =
/*#__PURE__*/
function () {
  function MealsModel() {
    _classCallCheck(this, MealsModel);

    this.meals = [{
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

  _createClass(MealsModel, [{
    key: "getMeals",
    value: function getMeals() {
      return this.meals;
    }
  }, {
    key: "createMeal",
    value: function createMeal(mealData) {
      var meal = {
        id: this.meals.length + 1,
        name: mealData.name,
        Description: mealData.Description,
        price: mealData.price,
        quantity: mealData.quantity
      };
      this.meals.push(meal);
      return meal;
    }
  }, {
    key: "updateMeal",
    value: function updateMeal(id, mealData) {
      var meal = this.meals.find(function (ameal) {
        return ameal.id === id;
      });
      meal.id = this.meals.length + 1;
      meal.name = mealData.name || meal.name;
      meal.Description = mealData.Description || meal.Description;
      meal.price = mealData.price || meal.price;
      meal.quantity = mealData.quantity || meal.quantity;
      return meal;
    }
  }, {
    key: "deleteMeal",
    value: function deleteMeal(id) {
      var meal = this.meals.find(function (ameal) {
        return ameal.id === id;
      });
      var mealIndex = this.meals.indexOf(meal);
      this.meals.splice(mealIndex, 1);
      return meal;
    }
  }]);

  return MealsModel;
}();

exports.default = MealsModel;
//# sourceMappingURL=mealModel.js.map