import { FormEvent, ReactElement } from "react";
import toast from 'react-hot-toast';
import ToasterLayout from "../components/ToasterLayout";

export default function cadastro() {
    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        const target = evt.target as HTMLFormElement; 
        
        const body = {
            email: target.email.value,
            name: target.username.value,
            password: target.password.value
        };

        const response = await (await fetch('/api/signup', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        if (response.success) {
            toast.success('Você foi cadastrado com sucesso! Redirecionando para a página de login em segundos.');
            setTimeout(() => {
                window.location.href = '/login';
            }, 3000);
        } else {
            toast.error(response.message);
        }
            
    };

    return (

        <div className="App">
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-slate-900 lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-slate-900">FAÇA SEU CADASTRO</h1>

                    <form className="mt-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm text-gray-800">Nome de usuário</label>
                            <input 
                                id="username"
                                type="text"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm text-gray-800">Seu email</label>
                            <input 
                                id="email"
                                type="email"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm text-gray-800">Sua senha</label>
                            <input 
                                id="password"
                                type="password"
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-900 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-purple-600"
                            >
                                Cadastro
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-slate-900">
                        Crie sua conta aqui!&nbsp;
                        <a href="/login" className="font-medium text-slate-900">Clique aqui</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

cadastro.getLayout = (page: ReactElement) => {
    return (
        <ToasterLayout>
            {page}
        </ToasterLayout>
    );
};