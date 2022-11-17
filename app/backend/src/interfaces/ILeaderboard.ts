export default interface ILeaderboard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}
