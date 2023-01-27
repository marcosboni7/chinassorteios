import jwt from 'jsonwebtoken';

const isAuth = (token: string) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET as string);

  return decodedToken;
};

export default isAuth;