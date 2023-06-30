import React from 'react'
import { useState, useEffect } from 'react'

const datosCuriosos = [
    "Los perros tienen un sentido del olfato excepcionalmente agudo.",
    "Los perros mueven su cola como una forma de comunicación.",
    "Los perros pueden tener diferentes colores de ojos.",
    "Algunos perros pueden correr a velocidades superiores a los 30 km/h.",
    "Los perros son conocidos por su lealtad y amor incondicional hacia los humanos.",
    "La raza de perro más pequeña del mundo es el Chihuahua.",
    "El récord mundial del perro más grande es un Gran Danés llamado Zeus.",
    "Los perros tienen alrededor de 18 músculos en cada oreja.",
    "Los perros pueden reconocer a sus dueños por su olor.",
    "El hocico de un perro es tan único como una huella digital en humanos.",
]


export default function TextCarousel() {
    const obtenerDatoCuriosoPerro = () => {
        const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
        return datosCuriosos[indiceAleatorio];
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const curiosidad = obtenerDatoCuriosoPerro();
            setDatoCurioso(curiosidad);
        }, 8000)

        return () => clearInterval(intervalId);
    }, [])
    const [datoCurioso, setDatoCurioso] = useState('')
    return (
        <div className='animate-fade-in'>
            {datoCurioso && <p>{datoCurioso}</p>}
        </div>
    )
}
