import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  private _teamsService: TeamsService;

  constructor() {
    this._teamsService = new TeamsService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const teams = await this._teamsService.getAll();
    return res.status(200).json(teams);
  };

  public getByPk = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this._teamsService.getByPk(Number(id));
    if (!team) {
      return res.status(404).json({ message: 'Invalid team' });
    }
    return res.status(200).json(team);
  };
}
