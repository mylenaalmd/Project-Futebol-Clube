import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();
const teamsController = new TeamsController();

teamsRouter.get('/teams', teamsController.getAll);
teamsRouter.get('/teams/:id', teamsController.getByPk);

export default teamsRouter;
