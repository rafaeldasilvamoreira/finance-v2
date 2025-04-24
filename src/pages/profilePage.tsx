import Perfil from "../assets/perfil.png";

export function Profile() {
    return (
        <div className="flex text-gray-200">
            <div className="w-1/3 bg-black flex flex-row p-4 rounded-md m-6 ">
                <div className="flex  p-2  flex-col justify-center items-center ">
                    <img className="rounded-full" width={80} src={Perfil} alt="" />
                    <h1 className="underline">alterar foto de perfil</h1>
                </div>
                <div className="flex flex-col font-semibold p-2">
                    <h1>Nome:</h1>
                    <h1>E-mail:</h1>
                </div>
            </div>
        </div>
    );
}