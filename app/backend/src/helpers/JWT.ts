import * as jwt from 'jsonwebtoken';
import IPayload from '../interfaces/IPayload';

const { JWT_SECRET = 'jwt_secret' } = process.env;

export const tokenGenerator = (payload: IPayload) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

export const verifyToken = (token: string) => {
  const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
  return decoded;
};

export default { tokenGenerator, verifyToken };
