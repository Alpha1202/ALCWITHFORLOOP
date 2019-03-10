import express from 'express';
import UsersController from '../controllers/user';

const usersRouter = express.Router();

usersRouter.post('/signup', UsersController.signup);
usersRouter.post('/login/:email', UsersController.login);
export default usersRouter;
