import express from 'express';
import UsersController from '../controllers/user';

const usersRouter = express.Router();

usersRouter.post('/auth/signup', UsersController.signup);
usersRouter.post('/auth/login/:email', UsersController.login);
export default usersRouter;
