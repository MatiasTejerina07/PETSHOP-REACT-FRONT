import Cards from "../components/Productos/Card"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
export default function Details() {
    const params = useParams()
    const [card, setCard] = useState([])


    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex justify-center items-center">
                <Cards title={card?.producto} price={card?.precio}
                    description={card?.descripcion} image={card?.imagen} quantity={card?.disponibles} />
            </div>
        </div>
    )
}
