import { createBrowserRouter, Route } from "react-router-dom"

//Páginas
import Inicio from "../pages/Inicio"
import Productos from "../pages/Productos"
import SobreNosotros from "../pages/SobreNosotros"
import NotFound from "../pages/NotFound"
import Details from "../pages/Details"
import General from "../layouts/General"
import Footer from "../pages/Footer"
import SingUp from "../pages/user/SingUp"
import SingIn from "../pages/user/SignIn"

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
                path: '/signin',
                element: <SingIn />
            },
            {
                path: '/signup',
                element: <SingUp />
            },
            {
                path: '/productos',
                element: (
                    <>
                        <Productos />
                        <Footer />
                    </>
                )
            },
            {
                path: '/sobrenosotros',
                element: (
                    <>
                        <SobreNosotros />
                        <Footer />
                    </>
                )
            },
            {
                path: '/details/:id',
                elemen: <Details />
            },
        ],
    },
])

