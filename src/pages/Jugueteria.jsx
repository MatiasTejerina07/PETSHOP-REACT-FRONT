import Categorias from "../components/Categorias"
import Example from "../components/Card"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Jugueteria() {
    const [farmacia, setProduct] = useState([])
    const [filtros, setFiltros] = useState({
        farmacia: false,
        jugueteria: false
    })

    const products = async () => {
        try {
            const res = await axios('https://mindhub-xj03.onrender.com/api/petshop');
            setProduct(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const mostrarFiltros = () => {
        if (filtros.farmacia === true) {
            setProduct(farmacia.filter((product) => product.categoria != "jugueteria"))
        } else if (filtros.jugueteria === true) {
            setProduct(farmacia.filter((product) => product.categoria != "farmacia"))
        }
        else {
            products()
        }
    }
    console.log(filtros);

    useEffect(
        () => {

            products()
        }, []
    )
    useEffect(() => {
        mostrarFiltros();
    }, [filtros])


    return (
        <div className="w-full h-full">
            <Categorias />
            <div className="w-full flex justify-around items-center pt-8">
                <label htmlFor="farmacia">Farmacia <input onChange={(e) => setFiltros({ ...filtros, farmacia: e.target.checked })} type="checkbox" name="farmacia" id="farmacia" />
                </label>
                <label htmlFor=""> Jugueteria <input onChange={(e) => setFiltros({ ...filtros, jugueteria: e.target.checked })} type="checkbox" name="jugueteria" id="jugueteria" />
                </label>
                <label htmlFor=""> Todos <input type="checkbox" name="" id="" />
                </label>
                <select className="w-52 h-10" name="filter" id="0">
                    <option value="1">Precio de mayor a menor</option>
                    <option value="1">Precio de menor a mayor</option>
                    <option value="2">Nombre de a--Z</option>
                    <option value="3">Nombre de Z--a</option>
                </select>
            </div>
            <div className="w-full flex flex-wrap relative -z-0 justify-center gap-x-10 gap-y-10 pb-10 pt-10">
                {farmacia && farmacia?.map((product) =>
                    <Example key={product._id} category={product?.categoria} title={product?.producto} image={product?.imagen} price={product?.precio} quantity={product?.disponibles} />
                )}
            </div>
        </div>
    )
}
