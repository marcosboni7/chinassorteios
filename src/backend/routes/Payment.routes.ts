import { Router, Request, Response } from 'express';
import PaymentController from '../controllers/Payment.controller';

class PaymentRoutes {
  constructor() {}

  static setup(router: Router) {
    const controller = new PaymentController();
    router.get('/payment/:id', (req: Request, res: Response) => controller.getById(req, res));
  }
}

export default PaymentRoutes;