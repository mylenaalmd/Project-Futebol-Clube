import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../helpers/JWT';

const tokenValidation = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    verifyToken(token);
    next();
  } catch (err) {
    if (err instanceof Error && err.name.includes('Token')) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    next(err);
  }
};

export default tokenValidation;
