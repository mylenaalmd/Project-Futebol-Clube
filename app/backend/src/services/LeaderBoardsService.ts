import IQuery from '../interfaces/IQuery';

class LeaderBoardsService {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;

  constructor(querySQL: IQuery) {
    this.name = querySQL.name;
    this.totalGames = Number(querySQL.j);
    this.totalVictories = Number(querySQL.v);
    this.totalDraws = Number(querySQL.e);
    this.totalLosses = Number(querySQL.d);
    this.goalsFavor = Number(querySQL.gp);
    this.goalsOwn = Number(querySQL.gc);
    this.goalsBalance = Number(querySQL.gp) - Number(querySQL.gc);
    this.totalPoints = Number(querySQL.v) * 3 + Number(querySQL.e);
    this.efficiency = Number((((Number(querySQL.v) * 3 + Number(querySQL.e))
     / (Number(querySQL.j) * 3)) * 100).toFixed(2));
  }

  public get getLeaderboards() {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: this.efficiency,
    };
  }
}

export default LeaderBoardsService;
