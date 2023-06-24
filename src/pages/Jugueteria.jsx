import Categorias from "../components/Categorias"
import Example from "../components/Card"
import axios from "axios"
import { useEffect, useState } from "react"

export default function Jugueteria() {
    const [products, setProducts] = useState([])
    useEffect(
        () => {
            axios('https://mindhub-xj03.onrender.com/api/petshop')
                .then(res => setProducts(res.data))
        }, []
    )
    console.log(products);
    return (
        <div className="w-full h-full">
            <Categorias />
            <div className="w-full flex flex-wrap relative -z-0 justify-center gap-x-10 gap-y-10 pb-10 pt-10">
                {products && products.map((product) =>
                    <Example key={product._id} category={product?.categoria} title={product?.producto} image={product?.imagen} price={product?.precio} quantity={product?.disponibles} />
                )}
            </div>
        </div>
    )
}
