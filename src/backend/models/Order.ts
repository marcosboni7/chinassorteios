import Raffle from "./Raffle";

interface Order {
  id?: number,
  quantity: number,
  userId: number,
  raffleId: number,
  raffle?: Raffle
}

export default Order;