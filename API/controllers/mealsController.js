import MealsModel from '../models/mealModel';

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
    if (!req.body.id && !req.body.name && !req.body.price && !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    } if (!req.body.id || !req.body.name || !req.body.price || !req.body.quantity) {
      return res.status(404).send({ message: 'All inputs are required' });
    }
    const newmeal = meal.createMeal(req.body);
    newmeal.id = req.body.id;
    newmeal.name = req.body.name.trim();
    newmeal.price = req.body.price;
    newmeal.quantity = req.body.quantity;

    return res.status(201).send(newmeal);
  }

  /**
    * Update meal info
    * @param {object} req
    * @param {object} res
    * @return {object} updated meal
    */
  static updateMeal(req, res) {
    const meals = meal.getAmeal(req.params.id);
    // const upmeal = meals.find(ameal => ameal.id === req.param.id);
    if (!meals) {
      return res.status(404).send({ message: 'Meal Not Found' });
    }
    const updatedMeal = meal.createMeal(req.params.id, req.body);
    return res.status(200).json(updatedMeal);
  }

  /**
    * delete a meal option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted meal || meal not found
    */
  static deleteMeal(req, res) {
    const meals = meal.deleteMeal(req.params.id);
    if (!meals) {
      return res.status(404).send({ message: 'Meal Not found' });
    }
    const deleted = meal.deleteMeal(req.param.id);
    return res.status(204).send(deleted);
  }
}
