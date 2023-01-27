import Raffle from "../models/Raffle";
import RaffleValidator from "../validators/Raffle.validator";
import { prisma } from "../lib/prisma";

import { UseCaseResponse } from "../http/UseCaseResponse";

class RaffleUseCase {
  constructor() {}

  async listRaffles(): Promise<Raffle[]> {
    const raffles = await prisma.raffle.findMany();

    return raffles;
  }

  async getRaffleById(id: number): Promise<Raffle | null> {
    const raffle = await prisma.raffle.findFirst({
      where: {
        id
      }
    });

    return raffle;
  }

  async createRaffle(data: Raffle): Promise<UseCaseResponse> {
    if (!RaffleValidator.validate(data))
      return [
        {
          success: false,
          message: 'Os dados da rifa não são validos.'
        },
        400
      ];

    await prisma.raffle.create({
      data
    });

    return [
      {
        success: true,
        message: 'Rifa criada com sucesso.'
      },
      200
    ];
  }
}

export default RaffleUseCase;