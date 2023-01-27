import { FormEvent } from "react"
import Raffle from "../../backend/models/Raffle";

export default function paineladicionar() {
    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        const target = evt.target as HTMLFormElement;

        const body: Raffle = {
            title: target.input_title.value,
            price: parseInt(target.price.value)
        };

        try {
            const response = await fetch('/api/raffles', {
                method: 'post',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status >= 400)
                throw new Error('Erro');

            const data = await response.json();
        } catch (err: unknown) {
            console.log('viadpo')
        }
    };

    return (
        <div className="flex">
            <nav className=" flex flex-col bg-black w-64 h-screen px-4 tex-gray-900 border border-purple-900">
                <div className="flex flex-wrap mt-8">
                    <span className="font-semibold text-white">Marcos</span>
                </div>
                <div className="mt-10 mb-4">
                    <ul className="ml-4">
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                    <path
                                        d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6 4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6 4h4v-4h-4M4 8h4V4H4v4z"
                                    ></path>
                                </svg>
                            </span>
                            <a href="#">
                                <span className="ml-2">Painel</span>
                            </a>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg
                                    className="fill-current h-5 w-5 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <a href="#">

                                <span className="ml-2">Criar Rifas</span>
                            </a>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                    <path
                                        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-1V1m-1 11h-5v5h5v-5z"
                                    ></path>
                                </svg>
                            </span>
                            <a href="#">

                                <span className="ml-2">Pedidos</span>
                            </a>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                                    <path
                                        d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z"
                                    ></path>
                                </svg>
                            </span>
                            <a href="#">
                                <span className="ml-2">Indisponivel</span>
                            </a>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg className="fill-current h-5 w-5 " viewBox="0 0 24 24">
                                    <path
                                        d="M12 13H7v5h5v2H5V10h2v1h5v2M8 4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2 9v2h-4v-2h4m2-2h-8v6h8v-6z"
                                    ></path>
                                </svg>
                            </span>
                            <a href="#">
                                <span className="ml-2">Indisponivel</span>
                            </a>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-black   hover:bg-gray-300  hover:font-bold rounded rounded-lg">
                            <span>
                                <svg
                                    className="fill-current h-5 w-5 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M7 3C8.86384 3 10.4299 4.27477 10.874 6H19V8H10.874C10.4299 9.72523 8.86384 11 7 11C4.79086 11 3 9.20914 3 7C3 4.79086 4.79086 3 7 3ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M17 20C15.1362 20 13.5701 18.7252 13.126 17H5V15H13.126C13.5701 13.2748 15.1362 12 17 12C19.2091 12 21 13.7909 21 16C21 18.2091 19.2091 20 17 20ZM17 18C18.1046 18 19 17.1046 19 16C19 14.8954 18.1046 14 17 14C15.8954 14 15 14.8954 15 16C15 17.1046 15.8954 18 17 18Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <a href="#">
                                <span className="ml-2">Indisponivel</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
            <div className="flex-grow">
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" onSubmit={onSubmit}>
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                <div className="gap-6">
                                    <div className="col-span-3 sm:col-span-2">
                                        <label form="company_website" className="block text-sm font-medium text-gray-700">
                                            china sorteios
                                        </label>

                                    </div>
                                </div>
                                <div>

                                    <label form="about" className="block text-sm font-medium text-gray-700">
                                        Titulo da rifa
                                    </label>
                                    <textarea id="about" name="input_title" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Digite seu titulo"></textarea>
                                </div>
                                <div>
                                    <label form="about" className="block text-sm font-medium text-gray-700">
                                        Valor da rifa
                                    </label>
                                    <input className="mt-1" name="price" type="number" placeholder="Digite o preço" />
                                    <div>

                                        <p className="mt-2 text-sm text-gray-500">
                                            PAINEL EM DESENVOLVIMENTO
                                        </p>
                                    </div>

                                    <div>


                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">
                                            ADICIONAR FOTO
                                        </label>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                            <div className="space-y-1 text-center">
                                                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden={true}>
                                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label form="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">
                                                    PNG, JPG, GIF up to 10MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}