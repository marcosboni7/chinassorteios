import Raffle from "../models/Raffle";

class RaffleValidator {
  constructor() {}

  static validate({ title, price }: Raffle): boolean {
    if (
      typeof title !== 'string' ||
      typeof price !== 'number'
    )
      return false;

    return true;
  }
}

export default RaffleValidator;