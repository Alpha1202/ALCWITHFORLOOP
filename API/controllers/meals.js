import Joi from 'joi';
import db from '../../models';

function validateMeal(meal) {
  const schema = {
    name: Joi.string().min(2).required(),
    Description: Joi.string().min(5).required(),
    price: Joi.number().required(),
    quantity: Joi.string().required(),
  };

  return Joi.validate(meal, schema);
}

export default class MealsController {
  /**
  * Get All Meals
  * @param {object} req
  * @param {object} res
  * @return {object} all meals
  */
  static async getAmeal(req, res) {
    const Meal = await db.meal.findAll({ where: { catererId: req.caterer.id } });
    if (Meal === undefined || Meal.length === 0) {
      return res.status(204).send({ message: 'No Meals' });
    }
    return res.status(200).send(Meal);
  }

  /**
   * Create a new meal
   * @param {object} req
   * @param {object} res
   * @return {object} created meal || all inputs are required
   */
  static async createAmeal(req, res) {
    try {
      const { error } = validateMeal(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      const { name, Description, price, quantity } = req.body;

      const Meal = await db.meal.create({ name, Description, price, quantity, catererId: req.caterer.id });
      return res.status(201).send(Meal);
    } catch (err) {
      return res.status(500).json({
        message: err.message,
      });
    }
  }

  /**
    * Update meal info
    * @param {object} req
    * @param {object} res
    * @return {object} updated meal
    */
  static async updateAmeal(req, res) {
    try {
      const ameal = await db.meal.findOne({ where: { id: req.params.id } });
      if (!ameal) {
        throw Error(`No meal with ID ${req.params.id}`);
      }
      const { error } = validateMeal(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      const UpdatedMeal = {
        name: req.body.name !== '' ? req.body.name : ameal.name,
        Description: req.body.Description !== '' ? req.body.Description : ameal.Description,
        price: req.body.price !== '' ? req.body.price : ameal.price,
        quantity: req.body.quantity !== '' ? req.body.quantity : ameal.quantity,
      };
      const { name, Description, price, quantity } = UpdatedMeal;
      await db.meal.update({ name, Description, price, quantity,
      }, { where: { id: req.params.id } });
      return res.status(200).send({ message: 'update successful', UpdatedMeal });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  }

  /**
    * delete a meal option
    * @param {object} req
    * @param {object} res
    * @return {object} deleted meal || meal not found
    */
  static async deleteAmeal(req, res) {
    try {
      const ameal = db.meal.findOne({ where: { id: req.params.id } });
      if (!ameal) {
        throw new Error(`No meal with ID ${req.params.id}`);
      }
      await db.meal.destroy();
      return res.status(200).send({ message: 'delete successful' });
    } catch (err) {
      return res.status(500).send({
        message: err.message,
      });
    }
  }
}