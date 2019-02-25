"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _mealModel = _interopRequireDefault(require("../models/mealModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function validateMeal(meal) {
  var schema = {
    name: _joi.default.string().min(2).required(),
    Description: _joi.default.string().min(5).required(),
    price: _joi.default.number().required(),
    quantity: _joi.default.string().required()
  };
  return _joi.default.validate(meal, schema);
}

var meal = new _mealModel.default();

var MealsController =
/*#__PURE__*/
function () {
  function MealsController() {
    _classCallCheck(this, MealsController);
  }

  _createClass(MealsController, null, [{
    key: "getAllMeals",

    /**
    * Get All Meals
    * @param {object} req
    * @param {object} res
    * @return {object} all meals
    */
    value: function getAllMeals(req, res) {
      var meals = meal.getMeals();

      if (meals === undefined || meals.length === 0) {
        return res.status(204).send({
          message: 'No Meals'
        });
      }

      return res.status(200).send(meals);
    }
    /**
     * Create a new meal
     * @param {object} req
     * @param {object} res
     * @return {object} created meal || all inputs are required
     */

  }, {
    key: "createMeal",
    value: function createMeal(req, res) {
      var _validateMeal = validateMeal(req.body),
          error = _validateMeal.error;

      if (error) return res.status(400).send(error.details[0].message);
      var newmeal = meal.createMeal(req.body);
      newmeal.name = req.body.name.trim();
      newmeal.Description = req.body.Description;
      newmeal.price = req.body.price;
      newmeal.quantity = req.body.quantity;
      return res.status(201).send(newmeal);
    }
  }, {
    key: "getAmeal",
    value: function getAmeal(req, res) {
      var meals = meal.getMeals();
      var newmeal = meals.find(function (ameal) {
        return ameal.id === parseInt(req.params.id);
      });
      if (!newmeal) return res.status(404).send({
        message: 'Meal Not Found'
      });
      res.status(200).send(newmeal);
    }
    /**
      * Update meal info
      * @param {object} req
      * @param {object} res
      * @return {object} updated meal
      */

  }, {
    key: "updateMeal",
    value: function updateMeal(req, res) {
      var meals = meal.getMeals();
      var upmeal = meals.find(function (somemeal) {
        return somemeal.id === parseInt(req.params.id);
      });
      if (!upmeal) return res.status(404).send({
        message: 'Meal Not Found'
      });

      var _validateMeal2 = validateMeal(req.body),
          error = _validateMeal2.error;

      if (error) return res.status(400).send(error.details[0].message);
      upmeal.name = req.body.name;
      upmeal.Description = req.body.Description;
      upmeal.price = req.body.price;
      upmeal.quantity = req.body.quantity;
      return res.status(200).send(upmeal);
    }
    /**
      * delete a meal option
      * @param {object} req
      * @param {object} res
      * @return {object} deleted meal || meal not found
      */

  }, {
    key: "deleteMeal",
    value: function deleteMeal(req, res) {
      var meals = meal.getMeals();
      var newmeal = meals.find(function (somemeal) {
        return somemeal.id === parseInt(req.params.id);
      });
      if (!newmeal) return res.status(404).send({
        message: 'Meal Not found'
      });
      var mealIndex = meals.indexOf(newmeal);
      meals.splice(mealIndex, 1);
      return res.status(200).send(newmeal);
    }
  }]);

  return MealsController;
}();

exports.default = MealsController;
//# sourceMappingURL=mealsController.js.map