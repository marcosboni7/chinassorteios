import { Router, Request, Response } from "express";
import TicketController from "../controllers/Ticket.controller";

class TicketRoutes {
  constructor() {}

  static setup(router: Router) {
    const controller = new TicketController();
    router.post('/tickets', (req: Request, res: Response) => controller.buy(req, res));
  }
}

export default TicketRoutes;