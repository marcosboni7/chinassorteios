import { Request, Response } from 'express';
import PaymentUseCase from "../usecases/Payment.usecase";

class PaymentController {
  private usecase: PaymentUseCase;

  constructor() {
    this.usecase = new PaymentUseCase();
  }

  async getById(req: Request, res: Response) {
    console.log('EAE', req.params.id)
    const [result, code] = await this.usecase.getByPaymentId(parseInt(req.params.id));

    res.status(code).json(result);
  }
}

export default PaymentController;