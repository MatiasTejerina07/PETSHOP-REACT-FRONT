import { createBrowserRouter, Route } from "react-router-dom"

//Páginas
import Inicio from "../pages/Inicio"
import Jugueteria from "../pages/Jugueteria"
import SobreNosotros from "../pages/SobreNosotros"
import NotFound from "../pages/NotFound"
import Details from "../pages/Details"
import General from "../layouts/General"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <General />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <Inicio />
            },
            {
                path: '/productos',
                element: <Jugueteria />
            },
            {
                path: '/sobrenosotros',
                element: <SobreNosotros />
            },
            {
                path: '/details/:id',
                elemen: <Details />
            },
        ],
    },
])

