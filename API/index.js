import express from 'express';
import bodyParser from 'body-parser';
import MealsController from './controllers/mealsController';
import MenuController from './controllers/menuControllers';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.status(200).send({ message: 'Server is running' }));
app.get('/api/v1/meals', MealsController.getAllMeals);
app.post('/api/v1/meals', MealsController.createMeal);
app.put('/api/v1/meals/:id', MealsController.updateMeal);
app.delete('/api/v1/meals/:id', MealsController.deleteMeal);
app.post('/api/v1/menu', MenuController.createMenu);
app.get('/api/v1/menu', MenuController.getMenu);

export default app;
