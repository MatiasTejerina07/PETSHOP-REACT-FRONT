import Categorias from "../components/Categorias"
import Cards from "../components/Productos/Card"
import { useEffect, useState } from "react"
import { Input as Entrada, Checkbox } from "@material-tailwind/react";
import Selects from "../components/Productos/Select";
import { CartContext } from '../context/Cart';
import { useProductContext } from '../context/Product'
import { useContext } from "react";

export default function Jugueteria() {
    const { cart, addProductToCart } = useContext(CartContext)
    const { product, setProduct, initialProducts } = useProductContext()
    console.log(cart);

    const [filtros, setFiltros] = useState({
        farmacia: false,
        jugueteria: false,
        buscador: ''
    })


    const mostrarFiltros = () => {
        let filteredProducts = initialProducts
        if (filtros.farmacia && filtros.jugueteria) {

        } else if
            (filtros.jugueteria) {
            filteredProducts = filteredProducts.filter(product => product.categoria === "jugueteria")
        }
        else if (filtros.farmacia) {
            filteredProducts = filteredProducts.filter(product => product.categoria === "farmacia")
        }
        if (filtros.buscador !== '') {
            filteredProducts = filteredProducts.filter(product =>
                product.producto.toLowerCase().includes(filtros.buscador.toLowerCase())
            )
        }
        setProduct(filteredProducts)
    }

    useEffect(
        () => {
            mostrarFiltros();

        }, [filtros]
    )
    const handleAddToCart = (e) => {
        let productId = e.target.value;
        let product = initialProducts.find((prod) => prod._id === productId)
        if (product) {
            product.disponibles = product.disponibles - 1
        }
        const productToAdd = { producto: product, cantidad: 1 };
        addProductToCart(productToAdd.producto, productToAdd.cantidad);
    }




    return (
        <div className="w-full h-full">
            <Categorias />
            <div className="w-full flex justify-around items-center pt-8">
                <div className="w-72">
                    <Entrada type="text" label="Buscar" name="buscador" onChange={(e) => setFiltros({ ...filtros, buscador: e.target.value })} />
                </div>
                <label className="font-poppins flex items-center justify-center" htmlFor="farmacia">Farmacia
                    <Checkbox onChange={(e) => setFiltros({ ...filtros, farmacia: e.target.checked })} type="checkbox" name="farmacia" id="farmacia" />
                </label>
                <label className="font-poppins flex items-center" htmlFor=""> Jugueteria
                    <Checkbox onChange={(e) => setFiltros({ ...filtros, jugueteria: e.target.checked })} type="checkbox" name="jugueteria" id="jugueteria" />
                </label>
                <Selects />
            </div>
            <div className="w-full flex flex-wrap relative -z-0 justify-center gap-x-10 gap-y-10 pb-10 pt-10">
                {product && product?.map((product) =>
                    <Cards key={product?._id} category={product?.categoria} title={product?.producto} image={product?.imagen}
                        price={product?.precio} quantity={product?.disponibles} id={product?._id} addItem={handleAddToCart} />
                )}

            </div>

        </div>
    )
}
