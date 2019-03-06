import express from 'express';

import OrdersController from '../controllers/orders';

const ordersRouter = express.Router();

ordersRouter.get('/', OrdersController.getAll);
ordersRouter.post('/', OrdersController.create);
ordersRouter.put('/:name', OrdersController.update);
ordersRouter.delete('/:name', OrdersController.delete);

export default ordersRouter;
