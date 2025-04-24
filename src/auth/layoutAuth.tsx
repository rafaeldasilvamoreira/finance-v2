import { Outlet } from 'react-router-dom'
import LogoBackground from '../assets/logoBackground.png'

export function LayoutAuth() {
    return (


        <div className=" flex flex-row bg-[#121212] h-screen">
            <div className='w-1/2 flex justify-center items-center '>
                <img src={LogoBackground} alt="" />
            </div>
            <div className='w-1/2 flex justify-center items-center '>
                <Outlet />
            </div>

        </div>

    )
}
