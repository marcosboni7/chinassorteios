import { Response, Request } from 'express';
import TicketUseCase from "../usecases/Ticket.usecase";

class TicketController {
  private usecase: TicketUseCase;

  constructor() {
    this.usecase = new TicketUseCase();
  }

  async buy(req: Request, res: Response) {
    const [result, code] = await this.usecase.buyNewTickets();

    res.status(code).json(result);
  }
}

export default TicketController;