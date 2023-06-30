import Categorias from "../components/Categorias"
import Cards from "../components/Productos/Card"
import { useEffect, useState } from "react"
import { Input as Entrada, Checkbox } from "@material-tailwind/react";
import Selects from "../components/Productos/Select";
import { apiUrl } from "../utils/api"
import axios from "axios";


export default function Jugueteria() {
    const [products, setProduct] = useState([])
    const [filtros, setFiltros] = useState({
        farmacia: false,
        jugueteria: false,
        buscador: ''
    })
    const [initialProducts, setInitialProducts] = useState([])
    useEffect(
        () => {
            axios(apiUrl + "products")
                .then(res => {
                    setProduct(res.data.products)
                    setInitialProducts(res.data.products)
                })
                .catch(err => console.log(err))
        }, []
    )
    const mostrarFiltros = () => {
        let filteredProducts = initialProducts
        if (filtros.jugueteria) {
            filteredProducts = filteredProducts.filter(product => product.categoria === "jugueteria")
        }
        if (filtros.farmacia) {
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
                {products && products?.map((product) =>
                    <Cards key={product?._id} category={product?.categoria} title={product?.producto} image={product?.imagen}
                        price={product?.precio} quantity={product?.disponibles} id={product?._id} />
                )}
            </div>
        </div>
    )
}
