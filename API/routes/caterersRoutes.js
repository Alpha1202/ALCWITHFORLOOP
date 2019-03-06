import express from 'express';
import CaterersController from '../controllers/caterers';

const caterersRouter = express.Router();

caterersRouter.post('/signup', CaterersController.signup);
caterersRouter.post('/login/:email', CaterersController.login);

export default caterersRouter;
