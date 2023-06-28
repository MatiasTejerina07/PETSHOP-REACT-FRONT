import React from 'react'
import { useUserContext } from "../../context/userContext";

export default function ItemsCart() {
    const { cart, setCart } = useUserContext()
    console.log(cart);
    return (
        <div>
            {cart.items.map((items) =>
                <div className='w-66  h-32 flex flex-col justify-center items-center rounded-2xl shadow-md mb-10'>
                    <div className='w-60 h-36 flex flex-col justify-center gap-1 '>
                        <p className=' text-black'>{items.producto}</p>
                        <div className='flex flex-row justify-between'>
                            <img className='w-20 h-20 rounded-full' src={items.photo} alt="" />
                            ${items.precio}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
