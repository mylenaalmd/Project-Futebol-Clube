import Teams from '../database/models/teams.model';

class TeamsService {
  private teamsModel;

  constructor() {
    this.teamsModel = Teams;
  }

  public getAll = async () => {
    const teams = await this.teamsModel.findAll();
    return teams;
  };

  public getByPk = async (id: number) => {
    const team = await this.teamsModel.findByPk(id);
    return team;
  };
}

export default TeamsService;
