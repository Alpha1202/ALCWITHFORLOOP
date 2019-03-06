import express from 'express';
import MealsController from '../controllers/meals';

const mealsRouter = express.Router();

mealsRouter.get('/', MealsController.getAmeal);
mealsRouter.post('/', MealsController.createAmeal);
mealsRouter.put('/:id', MealsController.updateAmeal);
mealsRouter.delete('/:id', MealsController.deleteAmeal);

export default mealsRouter;
