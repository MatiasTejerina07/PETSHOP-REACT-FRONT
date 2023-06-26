import Cards from "../components/Card"
import utils from "../api/utils"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
export default function Details() {
    const params = useParams()
    const [card, setCard] = useState([])

    useEffect(
        () => {
            utils.apiUrl().then(res => {
                const productos = res.data
                const filtCard = productos?.find((producto) => producto._id === params.id)
                setCard(filtCard)
            })

        }, []
    )
    return (
        <div className="flex w-full h-full justify-center items-center">
            <div className="flex justify-center items-center">
                <Cards title={card.producto} price={card.precio}
                    description={card.descripcion} image={card.imagen} quantity={card?.disponibles} />
            </div>
        </div>
    )
}
