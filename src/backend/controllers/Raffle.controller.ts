import { Request, Response } from "express";
import Raffle from "../models/Raffle";
import RaffleUseCase from "../usecases/Raffle.usecase";

class RaffleController {
  private usecase: RaffleUseCase;

  constructor() {
    this.usecase = new RaffleUseCase();
  }

  async list(req: Request, res: Response) {
    const raffles = await this.usecase.listRaffles();

    res.json(raffles);
  }

  async getById(req: Request, res: Response) {
    const raffle = await this.usecase.getRaffleById(parseInt(req.params.id));

    res.json(raffle);
  }

  async create(req: Request, res: Response) {
    const [result, code] = await this.usecase.createRaffle(req.body);

    res.status(code).json(result);
  }
}

export default RaffleController;