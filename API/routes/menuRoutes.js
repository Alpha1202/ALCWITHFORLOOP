import express from 'express';
import MenusController from '../controllers/menus';

const menusRouter = express.Router();

menusRouter.get('/', MenusController.getAll);
menusRouter.post('/', MenusController.create);

export default menusRouter;
