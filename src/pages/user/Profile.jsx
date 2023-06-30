import React from 'react'
import { DrawerCart } from '../../components/Cart/DrawerCart'
import { useSelector } from 'react-redux';


export default function Profile() {
    let { user } = useSelector(store => store.user)
    return (
        <div className='flex flex-col w-full h-screen'>
            <div className='w-full h-36 flex justify-end items-start p-10 bg-black'>
                <div className='flex justify-center items-center w-full'>
                    <p className='text-white font-[500] font-poppins text-[24px]'>MI PERFIL</p>
                </div>
                <DrawerCart />
            </div>
            <div className='flex flex-col items-center pl-10  py-10 w-[23%] border-r-2 h-full'>
                <img className='w-36 h-36  rounded-full object-fill' src={user.photo} alt="" />
                <div>
                    <p className='font-poppins py-4 font-[500] text-blue-500 hover:text-blue-600'><button>Editar Pefil</button></p>
                </div>
                <div className='flex flex-col  justify-center py-4'>
                    <p className='font-[500] font-poppins'>{user?.name}, {user.last_name}</p>
                    <p className='font-[500] font-poppins'>{user.email}</p>
                </div>
            </div>
        </div>
    )
}
