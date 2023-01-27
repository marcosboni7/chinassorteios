import { Router, Request, Response } from "express";
import RaffleController from "../controllers/Raffle.controller";

class RaffleRoutes {
  constructor() {}

  static setup(router: Router) {
    const controller = new RaffleController();
    router.post('/raffles', (req: Request, res: Response) => controller.create(req, res));
    router.get('/raffles', (req: Request, res: Response) => controller.list(req, res));
    router.get('/raffles/:id', (req: Request, res: Response) => controller.getById(req, res));
  }
}

export default RaffleRoutes; 