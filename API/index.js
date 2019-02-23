import express from 'express';
import MealsController from './controllers/mealsController';
import MenuController from './controllers/menuControllers';
import OrdersController from './controllers/OrderControllers';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Server is running' });
});

app.get('/api/v1/meals', MealsController.getAllMeals);
app.post('/api/v1/meals', MealsController.createMeal);
app.get('/api/v1/meals/:id', MealsController.getAmeal);
app.put('/api/v1/meals/:id', MealsController.updateMeal);
app.delete('/api/v1/meals/:id', MealsController.deleteMeal);
app.post('/api/v1/menu', MenuController.createMenu);
app.get('/api/v1/menu', MenuController.getAllMenu);
app.post('/api/v1/orders', OrdersController.createOrder);
app.put('/api/v1/orders/:id', OrdersController.updateOrder);
app.get('/api/v1/orders', OrdersController.getAllOrders);

export default app;
