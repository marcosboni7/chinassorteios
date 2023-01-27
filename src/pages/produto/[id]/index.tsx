import { useState } from "react";
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Raffle from "../../../backend/models/Raffle";

export default function produto() {
    const [amountOfTickets, setAmoutOfTickets] = useState(1);
    const router = useRouter();
    const { id } = router.query;
    const { data: raffle } = useSWR<Raffle>(typeof id !== 'undefined' && `/api/raffles/${id}`, async (url) => await (await fetch(url)).json(), {
        revalidateOnFocus: false
    });

    const submitBuy = async () => {
        const body = {
            raffleId: parseInt(id as string),
            quantity: amountOfTickets
        };

        const response = await (await fetch('/api/orders', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        if (response.success)
            window.location.href = '/pedidos';
    };

    return (
        <div style={{ backgroundColor: "black" }} className="App">
            <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
                <div className="container mx-auto flex items-center h-24">
                    <a href="" className="flex items-center justify-center">
                        <span className="ml-4 uppercase font-black">China<br />Sorteio</span>
                    </a>
                    <nav className="contents font-semibold text-base lg:text-lg">
                        <ul className="mx-auto flex items-center">
                            <li className="p-5 xl:p-8 active">
                                <a href="/">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li className="p-5 xl:p-8">
                                <a href="/pedidos">
                                    <span>Meus pedidos</span>
                                </a>
                            </li>
                            <li className="p-5 xl:p-8">
                                <a href="">
                                    <span>Termos</span>
                                </a>
                            </li>
                            <li className="p-5 xl:p-8">
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li className="p-5 xl:p-8">
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="botao border border-white rounded-full font-bold px-8 py-2">Login</button>
                </div>
            </header>
            <div className="bg-[url('https://ibb.co/R3nZj3j')]"
                style={{
                    height: 303
                }}>
            </div>

            <div className='container'>
                <img className='w-[567px] mt-[154px] ml-[199px] ' src="https://app.rifandos.com.br/public/images/default.png" alt="" />

                <div className='rounded bg-slate-600 ml-[805px] w-[697px] h-[50px] mt-[-40px]'>
                <h1 className='text-white mt-[-556px] ml-[159px] text-[33px]'>{raffle?.title}</h1>
                </div>
                <div className='container text-center  mt-[17px]'>
                    <h1 className='text-white text-[30px] ml-[738px] mt-[17px]'>Números automaticos</h1>
                    <p className='text-white text-[20px] mt-[10px] ml-[738px]'>O site escolhe os números para você</p>
                </div>
                <div className='container mt-[-79px]'>
                    <h1 className='text-white  ml-[1054px] mt-[162px] text-[20px]'>
                        {amountOfTickets}x R$ {raffle?.price} = R$ {typeof raffle?.price === 'number' && amountOfTickets * raffle?.price}
                    </h1>
                    <span className='text-white ml-[1038px] mt-[162px] text-[15px]'>Selecione uma quantidade</span>
                </div>
                <div className='grid grid-cols-4 gap-4 w-[503px] h-[60px] mt-[26px] ml-[909px]'>
                    <button 
                        className='bg-green-600 hover:bg-green-500 w-[123px] border-stone-100 rounded text-white text-center'
                        onClick={() => setAmoutOfTickets(1)}
                    >
                        01<br />
                        SELECIONAR
                    </button>
                    <button 
                        className='bg-green-600 hover:bg-green-500 w-[123px] border-stone-100 rounded text-white text-center'
                        onClick={() => setAmoutOfTickets(10)}
                    >
                        10<br />
                        SELECIONAR
                    </button>
                    <button
                        className='bg-green-600 hover:bg-green-500 w-[123px] border-stone-100 rounded text-white text-center'
                        onClick={() => setAmoutOfTickets(50)}
                    >
                        50<br />
                        SELECIONAR
                    </button>
                    <button 
                        className='bg-green-600 hover:bg-green-500 w-[123px] border-stone-100 rounded text-white text-center'
                        onClick={() => setAmoutOfTickets(100)}
                    >
                        100<br />
                        SELECIONAR
                    </button>
                </div>
                <div className='bg-slate-900 w-[615px] h-[79px] mt-[36px] ml-[859px] '>
                
                    <button 
                        className="bg-slate-900 h-[44px] hover:bg-slate-600 text-white font-bold py-2 px-4 mt-[22px] rounded"
                        onClick={() => setAmoutOfTickets((amount: number) => amount + 1)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                    </button>
                    <button 
                        className="rounded bg-slate-900 h-[44px] hover:bg-slate-600 text-white font-bold mt-=22 py-2 px-4 ml-[504px] "
                        onClick={() => setAmoutOfTickets((amount: number) => amount - 1 <= 0 ? amount : amount - 1)}
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 9.44772 3.44772 9 4 9L16 9C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11L4 11C3.44772 11 3 10.5523 3 10Z" fill="#374151" />
                        </svg>
                    </button>
                </div>
                <button 
                    className="rounded bg-green-600 hover:bg-green-500 h-[44px]  text-white font-bold py-2 px-4 ml-[504px]  w-[503px] mt-[53px] ml-[906px] "
                    onClick={submitBuy}
                >
                    COMPRAR
                </button>

            </div>
            <div className='text-white text-center text-[20px] mt-[-145px] ml-[604px] '>{amountOfTickets}</div>
            <div>subir</div>
            <div>subir</div>
               <div>subir</div>
               <div>subir</div>
        </div>
    );
}