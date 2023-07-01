import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/Cart'
import { Button } from '@material-tailwind/react';
import { useProductContext } from '../../context/Product'
export default function ItemsCart() {
    const { cart, addProductToCart, removeProductToCart } = useContext(CartContext)
    const { product, setProduct, initialProducts } = useProductContext()
    const addProduct = (e) => {
        let productId = e.target.value;
        let product = initialProducts.find((prod) => prod._id === productId)
        if (product) {
            product.disponibles = product.disponibles - 1
        }
        const productToAdd = { producto: product, cantidad: 1 };
        addProductToCart(productToAdd.producto, productToAdd.cantidad);
    }
    const removeProduct = (e) => {
        let productId = e.target.value;
        let product = initialProducts.find((prod) => prod._id === productId)
        if (product) {
            product.disponibles = product.disponibles + 1
        }
        const productToAdd = { producto: product, cantidad: 1 };
        removeProductToCart(productToAdd.producto, productToAdd.cantidad);
    }

    return (
        <div>
            <div className='w-72  h-full flex flex-col justify-center items-center rounded-2xl gap-2'>
                {cart && cart.map((items) =>
                    <div key={items._id} className='w-64 h-66 flex flex-col justify-center p-2 rounded-lg shadow-lg  bg-gray-50 gap-4 '>
                        <p className=' text-black text-center font-poppins font-[500] text-[15px]'>{items?.producto.producto}</p>
                        <div className='flex flex-row justify-between'>
                            <div>
                                <img className='w-20 h-20 rounded-full' src={items?.producto.imagen} alt="" />
                            </div>
                            <div className='flex flex-col items-center font-poppins'>
                                ${items?.producto.precio}
                                <p className='font-poppins bg-green-200 rounded-xl p-1'>Cantidad {items?.cantidad}</p>
                                {items?.producto.disponibles > 0 ?
                                    <p className='font-poppins bg-blue-200 my-1 rounded-md p-[3px]'>Disponible {items?.producto.disponibles}</p> : <p className='font-poppins w-28 text-[14px] bg-blue-400 rounded-md my-1 p-[3px]'>No hay más de este articulo</p>}

                            </div>
                        </div>
                        <div className='flex gap-2 '>
                            {items?.producto?.disponibles > 0 ?
                                <Button value={items.producto._id} onClick={addProduct} className='px-4 py-2'>+</Button> : ""}
                            {items?.cantidad > 0 ? <Button value={items.producto._id} color='red' onClick={removeProduct} className='px-4 py-2'>-</Button> : ""}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
