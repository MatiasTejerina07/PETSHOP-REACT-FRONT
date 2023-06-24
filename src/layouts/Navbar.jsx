import { Link as Anchor } from "react-router-dom"
import { useState } from "react"
import { Menu, Cerrar } from "../assets/Icons"

export default function Navbar() {
    const [menu, showmenu] = useState(true);

    const desplegarMenu = () => {
        showmenu(!menu);
    };
    return (
        <>
            <div className='h-full fixed animate-slide-down z-10'>
                {menu ? (
                    <div onClick={desplegarMenu} className="w-40 h-24 flex justify-between px-10 pt-8 items-center">
                        <Menu />
                    </div>
                ) : (
                    <div className="w-80 h-full bg-[#8c5cff]">
                        <span onClick={desplegarMenu} className="text-white flex justify-end py-4 px-4 hover:text-black"><Cerrar /></span>
                        <ul className="flex flex-col justify-around pl-10 h-96">
                            <li className="hover:bg-white rounded-l-2xl py-3 px-4">
                                <Anchor to={'/'} className="font-[500] text-white text-[20px] font-poppins hover:text-black py-4 pr-52">Inicio</Anchor>
                            </li>
                            <li className="hover:bg-white  rounded-l-2xl py-3 px-4">
                                <Anchor to={'/Jugueteria'} className="font-[500] text-white text-[20px] font-poppins hover:text-black py-4 pr-40" >Jugueteria</Anchor>
                            </li>
                            <li className="hover:bg-white  rounded-l-2xl py-3 px-4">
                                <Anchor to={'/Farmacia'} className="font-[500] text-white text-[20px] font-poppins hover:text-black py-4 pr-44" >Farmacia</Anchor>
                            </li>
                            <li className="hover:bg-white  rounded-l-2xl py-3 px-4">
                                <Anchor to={'/Sobrenosotros'} className="font-[500] text-white text-[20px] font-poppins hover:text-black py-10 pr-44" >Sobre Nosotros</Anchor>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
}
