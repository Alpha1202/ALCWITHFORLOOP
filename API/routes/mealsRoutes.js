import express from 'express';
import MealsController from '../controllers/meals';
import AuthController from '../controllers/authController';

const mealsRouter = express.Router();

mealsRouter.get('/', AuthController.verifyCaterer, MealsController.getAmeal);
mealsRouter.post('/', AuthController.verifyCaterer, MealsController.createAmeal);
mealsRouter.put('/:id', AuthController.verifyCaterer, MealsController.updateAmeal);
mealsRouter.delete('/:id', AuthController.verifyCaterer, MealsController.deleteAmeal);

export default mealsRouter;
