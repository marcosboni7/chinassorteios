import express, { Application, Request, Response, Router } from 'express';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { Agent } from 'https';

import AuthorizationRoutes from './routes/Authorization.routes';
import RaffleRoutes from './routes/Raffle.routes';
import TicketRoutes from './routes/Ticket.routes';
import OrderRoutes from './routes/Order.routes';
import PaymentRoutes from './routes/Payment.routes';
import cookieParser from 'cookie-parser';

type RequestHandler = (req: Request, res: Response) => Promise<void>;

class Server {
  private app: Application;

  constructor(private nextHandler: RequestHandler) {
    this.app = express();

    this.middlewares();
    this.routes();
    this.config();
  }

  private config() {
    this.app.get('*', this.nextHandler);
  }

  private routes() {
    const router = Router();
    AuthorizationRoutes.setup(router);
    RaffleRoutes.setup(router);
    TicketRoutes.setup(router);
    OrderRoutes.setup(router);
    PaymentRoutes.setup(router);

    this.app.use('/api', router);
  }

  private middlewares() {
    this.app.use(cookieParser());
    this.app.use(express.json());
  }

  listen(port: number) {
    this.app.listen(port, '0.0.0.0');
  }
  
}

export default Server;