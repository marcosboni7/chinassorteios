import { Router, Request, Response } from "express";
import OrderController from "../controllers/Order.controller";

class OrderRoutes {
  constructor() {}

  static setup(router: Router) {
    const controller = new OrderController();
    router.get('/orders', (req: Request, res: Response) => controller.listByUserId(req, res));
    router.post('/orders/payment', (req: Request, res: Response) => controller.generatePayment(req, res));
    router.post('/orders', (req: Request, res: Response) => controller.create(req, res));
  }
}

export default OrderRoutes;