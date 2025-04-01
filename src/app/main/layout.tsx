
import { Link, Outlet } from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { RxDashboard } from 'react-icons/rx'
import { LuArrowRightLeft } from 'react-icons/lu'
import { Tag } from 'lucide-react'
import { GoArrowLeft } from 'react-icons/go'
import { IoExitOutline, IoSettingsOutline } from 'react-icons/io5'

export const RootLayout = () => {


    return (

        <div className='bg-[#f4f4f4]  flex' >
            <div className='bg-[#09293D] w-64 max-w-1/2 h-screen shadow-md'>
                <div className='flex justify-between items-center py-2 px-4'>
                    <img src={logo} className='h-16' alt="logo" />
                    <GoArrowLeft size={20} className='text-white' />
                </div>
                <div className=' text-white flex flex-col'>
                    <Link to='panel'><div className='flex items-center py-3 pl-6 gap-4 hover:bg-[#0A4B7A] cursor-pointer'>
                        <RxDashboard size={18} />
                        <h1 >Painel</h1>
                    </div></Link>
                    <Link to='movements'> <div className='flex items-center py-3 pl-6 gap-4 hover:bg-[#0A4B7A] cursor-pointer '>
                        <LuArrowRightLeft size={18} />
                        <h1 >Movimentações</h1>
                    </div></Link>
                    <Link to='labels'> <div className='flex items-center py-3 pl-6 gap-4 hover:bg-[#0A4B7A] cursor-pointer'>
                        <Tag size={18} />
                        Etiquetas
                    </div></Link>
                    <Link to='settings'>   <div className='flex items-center py-3 pl-6 gap-4 hover:bg-[#0A4B7A] cursor-pointer'>
                        <IoSettingsOutline size={18} />
                        Configurações
                    </div></Link>
                    <div className='flex absolute bottom-0 justify-end p-6 bg-[#09293D] text-white'>
                        <IoExitOutline className='hover hover:text-red-600' size={20} />
                    </div>
                </div>


            </div>
            <div className='flex-1 bg-[#f4f4f4] h-screen overflow-y-auto'>
                <Outlet />
            </div>
        </div >
    )
}