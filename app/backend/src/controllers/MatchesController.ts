import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: MatchesService;

  constructor() {
    this._matchesService = new MatchesService();
  }

  public getAllMatches = async (_req: Request, res: Response) => {
    const matches = await this._matchesService.getAllMatches();
    return res.status(200).json(matches);
  };

  public getMatchesByProgress = async (req: Request, res: Response) => {
    const progress = req.query.inProgress;
    if (!progress) {
      return this.getAllMatches(req, res);
    }
    let progressResult;
    if (progress === 'true') {
      progressResult = true;
    } else {
      progressResult = false;
    }
    const matches = await this._matchesService.getMatchesByProgress(progressResult);
    return res.status(200).json(matches);
  };

  public createMatch = async (req: Request, res: Response) => {
    const match = await this._matchesService.createMatch(req.body);
    return res.status(201).json(match);
  };

  public updateProgress = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._matchesService.finishMatch(id);
    return res.status(200).json({ message: 'Finished' });
  };

  public updateMatch = async (req: Request, res: Response) => {
    const { id } = req.params;
    const newId = Number(id);
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await this._matchesService.updateMatch({
      id: newId,
      homeTeamGoals,
      awayTeamGoals,
    });
    return res.status(200).json({ message: 'Match updated' });
  };
}
