import { Router } from 'express';
import LeaderboardsController from '../controllers/LeaderboardsController';

const leaderboardsRouter = Router();
const leaderboardsController = new LeaderboardsController();

leaderboardsRouter.get('/leaderboard', leaderboardsController.getAllTeamsLeaderboards);
leaderboardsRouter.get('/leaderboard/home', leaderboardsController.getHomeLeaderboards);
leaderboardsRouter.get('/leaderboard/away', leaderboardsController.getAwayTeamsLeaderboards);

export default leaderboardsRouter;
