import ILeaderboard from '../interfaces/ILeaderboard';

export default class SortTeams {
  public firstSort = (teams: ILeaderboard[]) => {
    const concededGoals = teams.sort((b, a) => {
      if (a.goalsOwn > b.goalsOwn) return 1;
      if (a.goalsOwn < b.goalsOwn) return -1;
      return 0;
    });
    const makeGoals = concededGoals.sort((b, a) => {
      if (a.goalsFavor > b.goalsFavor) return 1;
      if (a.goalsFavor < b.goalsFavor) return -1;
      return 0;
    });
    const scoredGoals = makeGoals.sort((b, a) => {
      if (a.goalsBalance > b.goalsBalance) return 1;
      if (a.goalsBalance < b.goalsBalance) return -1;
      return 0;
    });
    return scoredGoals;
  };

  public lastSort = (teams: ILeaderboard[]) => {
    const sortByVic = teams.sort((b, a) => {
      if (a.totalVictories > b.totalVictories) return 1;
      if (a.totalVictories < b.totalVictories) return -1;
      return 0;
    });
    const sortByTotalPoints = sortByVic.sort((b, a) => {
      if (a.totalPoints > b.totalPoints) return 1;
      if (a.totalPoints < b.totalPoints) return -1;
      return 0;
    });
    return sortByTotalPoints;
  };

  public sortTeams = (teams: ILeaderboard[]): ILeaderboard[] => {
    const sorted = this.lastSort(this.firstSort(teams));
    return sorted;
  };
}
