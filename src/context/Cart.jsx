import { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addProductToCart = (product, cantidad) => {
        const existingProductIndex = cart.findIndex((item) => item.producto === product);

        if (existingProductIndex !== -1) {
            setCart((prevCart) =>
                prevCart.map((item, index) =>
                    index === existingProductIndex ? { ...item, cantidad: item.cantidad + cantidad } : item
                )
            )
        } else {

            setCart((prevCart) => [...prevCart, { producto: product, cantidad: cantidad }]);
        }
    };



    const removeProductToCart = (product, cantidad) => {
        const existingProductIndex = cart.findIndex((item) => item.producto === product);

        if (existingProductIndex !== -1) {
            setCart((prevCart) =>
                prevCart.map((item, index) =>
                    index === existingProductIndex ? { ...item, cantidad: item.cantidad - cantidad } : item
                )
            )
        } else {

            setCart((prevCart) => [...prevCart, { producto: product, cantidad: -cantidad }]);
        }
    };

    const deleteProductToCart = (product) => {
        const existingProductIndex = cart.findIndex((item) => item.producto !== product);

        if (existingProductIndex !== -1) {
            setCart((prevCart) => prevCart.filter((item, index) => index !== existingProductIndex));
        }
    };
    const totalPrice = cart.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0)

    const checkout = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ cart, addProductToCart, removeProductToCart, deleteProductToCart, totalPrice, checkout }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
