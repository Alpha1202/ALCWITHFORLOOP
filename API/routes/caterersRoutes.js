import express from 'express';
import CaterersController from '../controllers/caterers';

const caterersRouter = express.Router();

caterersRouter.post('/auth/signup', CaterersController.signup);
caterersRouter.post('/auth/login', CaterersController.login);

export default caterersRouter;
