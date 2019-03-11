import express from 'express';
import MenusController from '../controllers/menus';
import AuthController from '../controllers/authController';

const menusRouter = express.Router();

menusRouter.get('/', AuthController.verifyUser, MenusController.getAll);
menusRouter.get('/caterer', AuthController.verifyCaterer, MenusController.getAmenu);
menusRouter.post('/', AuthController.verifyCaterer, MenusController.create);

export default menusRouter;
