import { prisma } from "../lib/prisma";
import gnauth from "../lib/gnauth";
import { UseCaseResponse } from "../http/UseCaseResponse";

class PaymentUseCase {
  constructor() {}

  async getByPaymentId(orderId: number): Promise<UseCaseResponse> {
    const payment = await prisma.payment.findFirst({
      where: {
        orderId
      }
    });

    const gnrequest = await gnauth();
    const { data: loc } = await gnrequest.get(`/v2/loc/${payment?.locId}/qrcode`);

    return [
      {
        success: true,
        message: 'Dados de pagamento recuperados.',
        qrcode: loc.imagemQrcode,
        price: payment?.total
      },
      200
    ]
  }
}

export default PaymentUseCase;