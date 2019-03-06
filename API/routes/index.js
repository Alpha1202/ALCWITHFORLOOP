import express from 'express';
import caterersRouter from './caterersRoutes';
import usersRouter from './usersRoutes';
import mealsRouter from './mealsRoutes';
import ordersRouter from './ordersRoutes';
import menusRouter from './menuRoutes';

const router = express.Router();

router.use('/caterers', caterersRouter);
router.use('/users', usersRouter);
router.use('/meals', mealsRouter);
router.use('/orders', ordersRouter);
router.use('/menu', menusRouter);

export default router;
