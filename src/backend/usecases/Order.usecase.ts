
import { prisma } from "../lib/prisma";
import { UseCaseResponse } from "../http/UseCaseResponse";

import isAuth from "../lib/auth";
import gnauth from "../lib/gnauth";
import Order from "../models/Order";

class OrderUseCase {
  constructor() {}

  async listOrdersByUserId(token: string): Promise<Order[]> {
    const user = isAuth(token);
    const orders = await prisma.order.findMany({
      where: {
        userId: parseInt(user.sub as string)
      },
      include: {
        raffle: true,
        payment: true
      },
      orderBy: [
        {
          id: 'desc'
        }
      ]
    });

    return orders;
  }

  async createOrder(data: { quantity: number, raffleId: number }, token: string): Promise<UseCaseResponse> {
    const user = isAuth(token);

    if (!user)
      return [
        {
          success: false,
          message: 'Você deve estar autenticado para realizar um pedido.'
        },
        403
      ];

    await prisma.order.create({
      data: {
        quantity: data.quantity,
        raffleId: data.raffleId,
        userId: parseInt(user.sub as string)
      }
    });

    return [
      {
        success: true,
        message: 'Pedido realizado com sucesso.'
      },
      200
    ];
  }

  async generatePaymentQrCode(orderId: number ): Promise<UseCaseResponse> {
    const order = await prisma.order.findFirst({
      where: {
        id: orderId
      },
      include: {
        raffle: true
      }
    });

    if (!order)
      return [
        {
          success: false,
          message: 'Pedido inexistente.'
        },
        400
      ];

    const total = Number(order?.raffle.price * order?.quantity).toFixed(2);
    const cobData = {
      calendario: {
        expiracao: 3600
      },
      valor: {
        original: total
      },
      chave: '12345678901',
      solicitacaoPagador: 'Informe o número do pagador ou pedido.'
    };

    const gnrequest = await gnauth();
    const { data: cob } = await gnrequest.post('/v2/cob/', cobData);

    await prisma.payment.create({
      data: {
        locId: cob.loc.id,
        total: parseFloat(total),
        order: {
          connect: {
            id: order.id
          }
        }
      }
    });

    return [
      {
        success: true,
        message: 'Pagamento criado',
      },
      200
    ];
  }
}

export default OrderUseCase;