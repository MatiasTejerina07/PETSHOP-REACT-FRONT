import Categorias from "../components/Categorias"
import Cards from "../components/Card"
import { useEffect, useState } from "react"
import utils from '../api/utils'

export default function Jugueteria() {
    const [farmacia, setProduct] = useState([])
    const [filtros, setFiltros] = useState({
        farmacia: false,
        jugueteria: false,
        buscador: ''
    })
    const [initialProducts, setInitialProducts] = useState([])
    const products = () => utils.apiUrl().then(res => {
        setProduct(res.data)
        setInitialProducts(res.data)
    })

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
            products()
        }, []
    )

    useEffect(
        () => {
            mostrarFiltros();
        }, [filtros]
    )



    return (
        <div className="w-full h-full">
            <Categorias />
            <div className="w-full flex justify-around items-center pt-8">
                <input type="text" className="border rounded-md" placeholder="Buscar.." name="buscador" onChange={(e) => setFiltros({ ...filtros, buscador: e.target.value })} />
                <label htmlFor="farmacia">Farmacia <input onChange={(e) => setFiltros({ ...filtros, farmacia: e.target.checked })} type="checkbox" name="farmacia" id="farmacia" />
                </label>
                <label htmlFor=""> Jugueteria <input onChange={(e) => setFiltros({ ...filtros, jugueteria: e.target.checked })} type="checkbox" name="jugueteria" id="jugueteria" />
                </label>
                <select className="w-52 h-10" name="filter" id="filter">
                    <option onChange={(e) => setFiltros({ ...filtros, preciomayor: e.target.value })} id="preciomayor" value="preciomayor">Precio de mayor a menor</option>
                    <option value="1">Precio de menor a mayor</option>
                    <option value="2">Nombre de a--Z</option>
                    <option value="3">Nombre de Z--a</option>
                </select>
            </div>
            <div className="w-full flex flex-wrap relative -z-0 justify-center gap-x-10 gap-y-10 pb-10 pt-10">
                {farmacia && farmacia?.map((product) =>
                    <Cards key={product?._id} category={product?.categoria} title={product?.producto} image={product?.imagen}
                        price={product?.precio} quantity={product?.disponibles} id={product?._id} />
                )}
            </div>
        </div>
    )
}
