import express from 'express';

import OrdersController from '../controllers/orders';
import AuthController from '../controllers/authController';

const ordersRouter = express.Router();

ordersRouter.get('/', AuthController.verifyCaterer, OrdersController.getAll);
ordersRouter.post('/', AuthController.verifyUser, OrdersController.create);
ordersRouter.put('/:name', AuthController.verifyUser, OrdersController.update);
ordersRouter.delete('/:name', AuthController.verifyUser, OrdersController.delete);

export default ordersRouter;
