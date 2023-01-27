import { Request, Response } from "express";
import OrderUseCase from "../usecases/Order.usecase";

class OrderController {
  private usecase: OrderUseCase;

  constructor () {
    this.usecase = new OrderUseCase();
  }

  async create(req: Request, res: Response) {
    const [result, code] = await this.usecase.createOrder(req.body, req.cookies.authorization);

    res.status(code).json(result);
  }

  async listByUserId(req: Request, res: Response) {
    const orders = await this.usecase.listOrdersByUserId(req.cookies.authorization);

    res.json(orders);
  }

  async generatePayment(req: Request, res: Response) {
    const [result, code] = await this.usecase.generatePaymentQrCode(req.body.orderId);
    
    res.status(code).json(result);
  }
}

export default OrderController;