import { FormEvent, ReactElement } from "react";
import ToasterLayout from "../components/ToasterLayout";
import toast from 'react-hot-toast';

export default function login() {
    const onSubmit = async (evt: FormEvent) => {
        evt.preventDefault();
        const target = evt.target as HTMLFormElement;

        const body = {
            email: target.email.value,
            password: target.password.value
        };

        const response = await (await fetch('/api/signin', {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json();

        if (response.success)
            window.location.href = '/';
        else
            toast.error(response.message);
    };

    return (
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-slate-900 lg:max-w-md">
                    <h1 className="text-3xl font-semibold text-center text-slate-900">FAÇA SEU LOGIN</h1>

                    <form className="mt-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-800">Seu Email</label>
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
                                className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <a href="#" className="text-xs text-gray-600 hover:underline">Esqueci minha senha</a>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-900 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-purple-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <p className="mt-8 text-xs font-light text-center text-slate-900">
                        Já tem uma conta?&nbsp;
                        <a href="/cadastro" className="font-medium text-slate-900">Clique aqui</a>
                    </p>
                </div>
            </div>
        </>
    )
}

login.getLayout = (page: ReactElement) => {
    return (
        <ToasterLayout>
            {page}
        </ToasterLayout>
    );
};