import { Request, Response } from 'express';
import IQuery from '../interfaces/IQuery';
import SortTeams from '../helpers/SortTeams';
import LeaderboardsService from '../services/LeaderBoardsService';
import TeamsFromDB from '../helpers/TeamsFromDB';

const TEAM_TYPE = {
  home: 'home',
  away: 'away',
  all: 'all',
};

export default class LeaderboardsController {
  sortHelper: SortTeams;
  getTeamsHelper: TeamsFromDB;

  constructor() {
    this.sortHelper = new SortTeams();
    this.getTeamsHelper = new TeamsFromDB();
  }

  public mapTeamsWithService = (teams: IQuery[]) => {
    const mapedTeams = teams.map((leader) =>
      new LeaderboardsService(leader as IQuery).getLeaderboards);
    return mapedTeams;
  };

  public getOrderTeams = async (team: string) => {
    const teamsFromDB = await this.getTeamsHelper.getTeamsFromDB(team);
    const teams = this.mapTeamsWithService(teamsFromDB);
    const orderTeams = this.sortHelper.sortTeams(teams);
    return orderTeams;
  };

  public getHomeLeaderboards = async (_req: Request, res: Response) => {
    const teams = await this.getOrderTeams(TEAM_TYPE.home);
    return res.status(200).json(teams);
  };

  public getAwayTeamsLeaderboards = async (_req: Request, res: Response) => {
    const teams = await this.getOrderTeams(TEAM_TYPE.away);
    return res.status(200).json(teams);
  };

  public getAllTeamsLeaderboards = async (_req: Request, res: Response) => {
    const teams = await this.getOrderTeams(TEAM_TYPE.all);
    return res.status(200).json(teams);
  };
}
