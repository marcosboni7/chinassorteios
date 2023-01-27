import { Router, Request, Response } from 'express';
import UserUseCase from '../usecases/User.usecase';

class AuthorizationController {
  private usecase: UserUseCase;

  constructor() {
    this.usecase = new UserUseCase();
  }

  public async signUp(req: Request, res: Response) {
    const [result, code] = await this.usecase.signUpUser(req.body);
    res.status(code).json(result);
  }

  public async signIn(req: Request, res: Response) {
    console.log('request:', req.body);
    const [{ success, message, token }, code] = await this.usecase.signInUser(req.body);
    if (token)
      res.cookie('authorization', token);
    res.status(code).json({ success, message });
  }

  public async checkAuthenticity(req: Request, res: Response) {
    const token = req.cookies.authorization;
    const [result, code] = await this.usecase.isAuthorized(token);
    res.status(code).json(result);
  }
}

export default AuthorizationController;