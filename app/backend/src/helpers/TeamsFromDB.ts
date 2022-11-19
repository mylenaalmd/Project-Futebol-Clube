import { QueryTypes } from 'sequelize';
import { homeQuery, awayQuery, allQuery } from './Queries';
import db from '../database/models';
import IQuery from '../interfaces/IQuery';

export default class TeamsFromDB {
  public getTeamsFromDB = async (typ: string) => {
    let results : IQuery[] = [];
    if (typ === 'home') {
      results = await db.query(homeQuery, { type: QueryTypes.SELECT });
    }
    if (typ === 'away') {
      results = await db.query(awayQuery, { type: QueryTypes.SELECT });
    }
    if (typ === 'all') {
      results = await db.query(allQuery, { type: QueryTypes.SELECT });
    }
    return results;
  };
}
