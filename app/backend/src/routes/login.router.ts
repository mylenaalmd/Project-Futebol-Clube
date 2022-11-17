import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import loginValidation from '../middlewares/loginValidation';

const loginRouter = Router();
const loginController = new LoginController();

loginRouter.post('/login', loginValidation, loginController.login);
loginRouter.get('/login/validate', loginController.validToken);

export default loginRouter;
