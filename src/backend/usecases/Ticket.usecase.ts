import { prisma } from '../lib/prisma';

import { UseCaseResponse } from "../http/UseCaseResponse";

class TicketUseCase {
  constructor() {}

  async buyNewTickets(): Promise<UseCaseResponse> {

    return [
      {
        success: true,
        message: ''
      },
      200
    ];
  }
}

export default TicketUseCase;