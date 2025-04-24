import { Link } from "react-router-dom";


export function LoginPage() {
    return (


        <div className="flex flex-col gap-10 ">
            <div className="text-gray-200 font-bold text-2xl text-center">
                <h1 className="italic font-extralight">Seja Bem-vindo ao Finance!</h1>
            </div>

            <div className="flex flex-col bg-[#1E1E1E] p-4 rounded-xl justify-center items-center text-gray-200 gap-2"  >
                <h2 className=" text-xl font-bold">Faça já seu Login</h2>
                <form className="flex flex-col gap-4  m-4 w-60">                   
                    <input className="bg-[#121212]  rounded-md px-4 py-2" type="text" placeholder="E-mail" />
                    <input className="bg-[#121212]  rounded-md px-4 py-2" type="password" placeholder="Senha" />
                    <button className="bg-green-500 rounded-md px-4 py-2 font-semibold cursor-pointer">Entrar</button>
                </form>
                <div>
                    <Link to={'/auth/registerPage'}><h1 className="underline cursor-pointer">Cadastre-se</h1></Link>
                </div>
            </div>

        </div>


    )
}