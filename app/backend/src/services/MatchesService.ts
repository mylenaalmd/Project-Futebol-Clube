import IUpdateMatch from '../interfaces/IUpdateMatch';
import IMatch from '../interfaces/IMatch';
import Matches from '../database/models/matches.model';
import Teams from '../database/models/teams.model';

class MatchesService {
  private _matchesModel;

  constructor() {
    this._matchesModel = Matches;
  }

  public getAllMatches = async () => {
    const matches = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  };

  public getMatchesByProgress = async (progress: boolean) => {
    const matches = await Matches.findAll({
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });

    return matches;
  };

  public createMatch = async (match: IMatch) => {
    const createdMatch = await this._matchesModel.create({
      ...match,
      inProgress: true,
    });
    return createdMatch;
  };

  public finishMatch = async (id: string) => {
    await this._matchesModel.update({ inProgress: false }, { where: { id } });
  };

  public updateMatch = async (data: IUpdateMatch) => {
    const { homeTeamGoals, awayTeamGoals, id } = data;
    await this._matchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  };
}

export default MatchesService;
