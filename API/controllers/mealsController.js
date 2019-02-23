import Joi from 'joi';
import MealsModel from '../models/mealModel';

function validateMeal(meal) {
  const schema = {
    name: Joi.string().min(2).required(),
    Description: Joi.string().min(5).required(),
    price: Joi.number().required(),
    quantity: Joi.string().required(),
  };

  return Joi.validate(meal, schema);
}


const meal = new MealsModel();
export default class MealsController {
  /**
  * Get All Meals
  * @param {object} req
  * @param {object} res
  * @return {object} all meals
  */
  static getAllMeals(req, res) {
    const meals = meal.getMeals();
    if (meals === undefined || meals.length === 0) {
      return res.status(204).send({ message: 'No Meals' });
    }
    return res.status(200).send(meals);
  }

  /**
   * Create a new meal
   * @param {object} req
   * @param {object} res
   * @return {object} created meal || all inputs are required
   */
  static createMeal(req, res) {
    const { error } = validateMeal(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const newmeal = meal.createMeal(req.body);
    newmeal.name = req.body.name.trim();
    newmeal.Description = req.body.Description;
    newmeal.price = req.body.price;
    newmeal.quantity = req.body.quantity;

    return res.status(201).send(newmeal);
  }

  static getAmeal(req, res) {
    const meals = meal.getMeals();
    const newmeal = meals.find(ameal => ameal.id === parseInt(req.params.id));
    if (!newmeal) return res.status(404).send({ message: 'Meal Not Found' });
    res.status(200).send(newmeal);
  }

  /**
    * Update meal info
    * @param {object} req
    * @param {object} res
    * @return {object} updated meal
    */
  static updateMeal(req, res) {
    const meals = meal.getMeals();
    const upmeal = meals.find(somemeal => somemeal.id === parseInt(req.params.id));
    if (!upmeal) return res.status(404).send({ message: 'Meal Not Found' });
    const { error } = validateMeal(req.body);
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
  static deleteMeal(req, res) {
    const meals = meal.getMeals();
    const newmeal = meals.find(somemeal => somemeal.id === parseInt(req.params.id));
    if (!newmeal) return res.status(404).send({ message: 'Meal Not found' });

    const mealIndex = meals.indexOf(newmeal);
    meals.splice(mealIndex, 1);
    return res.status(200).send(newmeal);
  }
}
