import { Request, Response, NextFunction } from 'express';
import Teams from '../database/models/teams.model';

const createMatchesValidations = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  if (homeTeam === awayTeam) {
    const message = 'It is not possible to create a match with two equal teams';
    return res.status(422).json({ message });
  }
  const fHomeTeam = await Teams.findByPk(homeTeam);
  const fAwayTeam = await Teams.findByPk(awayTeam);

  if (!fHomeTeam || !fAwayTeam) {
    const message = 'There is no team with such id';
    return res.status(404).json({ message });
  }
  next();
};

export default createMatchesValidations;
