import { Router, Request, Response } from "express";
import AuthorizationController from "../controllers/Authorization.controller";

class AuthorizationRoutes {
  constructor() {}

  static setup(router: Router) {
    const controller = new AuthorizationController();
    router.post('/signup', (req: Request, res: Response) => controller.signUp(req, res));
    router.post('/signin', (req: Request, res: Response) => controller.signIn(req, res));
    router.get('/authorize', (req: Request, res: Response) => controller.checkAuthenticity(req, res));
  }
}

export default AuthorizationRoutes; 