import { Link, Outlet } from "react-router-dom"
import Logo from '../assets/logo.png'
import { CirclePlus, CreditCard, House, List, User, } from "lucide-react"


export function LayoutPage() {
    return (

        <div className=" bg-[#121212] h-screen">
            <div className=" bg-black flex items-center justify-between px-10 h-18">
                <img src={Logo} width={70} alt="" />
                <div className=" flex gap-10  text-gray-200">
                    <Link to={'/homePage'}><button className="hover:bg-[#1E1E1E] rounded-md px-4 py-2 "><House /></button></Link>
                    <Link to={'/countPage'}><button className="hover:bg-[#1E1E1E] rounded-md px-4 py-2 "><List /></button>  </Link>
                    <Link to={'/cardPage'}><button className="hover:bg-[#1E1E1E] rounded-md px-4 py-2 "><CreditCard /></button></Link>
                    <Link to={'/profilePage'}><button className="hover:bg-[#1E1E1E] rounded-md px-4 py-2 "><User /></button></Link>
                </div>
                <div>
                    <button className="hover:bg-[#1E1E1E] text-green-500 px-4 py-2 rounded-md flex items-center gap-2"><CirclePlus /> </button>
                </div>
            </div>

            <Outlet />
        </div>

    )
}
