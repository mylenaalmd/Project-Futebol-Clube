import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import createMatchesValidations from '../middlewares/createMatchesValidations';
import tokenValidation from '../middlewares/tokenValidation';

const matchesRouter = Router();
const matchesController = new MatchesController();

matchesRouter.get('/matches', matchesController.getMatchesByProgress);
matchesRouter.post(
  '/matches',
  createMatchesValidations,
  tokenValidation,
  matchesController.createMatch,
);
matchesRouter.patch('/matches/:id', matchesController.updateMatch);
matchesRouter.patch('/matches/:id/finish', matchesController.updateProgress);

export default matchesRouter;
