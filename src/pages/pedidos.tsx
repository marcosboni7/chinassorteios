import useSWR from 'swr';
import { useState } from 'react';
import Order from '../backend/models/Order';

import Head from 'next/head';
import SiteLayout from '../components/SiteLayout';
import { ReactElement } from 'react';

export default function pix() {
    const { data: orders } = useSWR<Order[]>('/api/orders', async (url) => await (await fetch(url)).json(), {
        revalidateOnFocus: false
    });
    const [orderPayLoadingIndex, setOrderPayLoadingIndex] = useState(-1);

    const handlePay = async (orderId: number) => {
        setOrderPayLoadingIndex(orderId);

        console.log(orderId)
        const body = {
            orderId
        };

        const response = await (await fetch('/api/orders/payment', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        if (response.success) {
            window.location.href = `/produto/${orderId}/pagar`;
        }
    };

    return (
        <>
            <Head>
                <title>Pedidos</title>
            </Head>
            <div className="overflow-hidden">
                <div 
                    className="bg-[url('https://cdn.discordapp.com/attachments/1063180963439464641/1063653322894098443/banner.jpg')]"
                    style={{
                        height: 303
                    }}
                />
                <div className="">
                    <h1 className="text-white text-[30px] text-center mt-[41px] ">
                        PAGAMENTO
                    </h1>
                    <div className="container ml-[39px] mt-[96px] ">
                        <div className='grid grid-cols-5 gap-5 ml-[528px]  '>
                            <div className="text-white ml-[-143px] ">Rifa</div>
                            <div className="text-white ml-[-131px] ">Data de pedido</div>
                            <div className="text-white ml-[-79px] ">Total</div>
                            <div className="text-white ml-[-57px] ">Expira em</div>
                        </div>
                    </div>
                    <div className="ml-[351px]">
                        {orders?.map((order) => (
                            <div key={order.id} className='grid grid-cols-6 items-center rounded bg-gray-600 w-1/2 h-30 mt-5 w-[1485px] ml-[-226px] overflow-hidden'>
                                <img className='w/12 h-24' src="data:image/jpeg;base64,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" alt="" />
                                <div className="text-white ml-[-16px] ">{order.raffle?.title}</div>
                                <div className="text-white ml-[-34px] ">19/01/2023 às 08:58</div>
                                <div className="text-white ml-[-65px] ml-[-14px] ">R$ {order.raffle?.price as number * order.quantity}</div>
                                <div className="text-white ml-[-33px] ">1 hora</div>
                                <button className="text-green-500 ml-[-69px]" onClick={() => handlePay(order.id!)}>
                                    {orderPayLoadingIndex === order.id &&
                                        <div className="mx-auto w-6 h-6 border-4 border-green-600 border-b-green-400 rounded-full animate-spin" />}
                                    {orderPayLoadingIndex !== order.id &&
                                        'Efetuar pagamento'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

pix.getLayout = (page: ReactElement) => {
    return (
        <SiteLayout>
            {page}
        </SiteLayout>
    );
};