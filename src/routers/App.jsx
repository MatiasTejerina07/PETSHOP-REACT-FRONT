import Navbar from "../layouts/Navbar"
import { Routes, Route } from "react-router-dom"

//Páginas
import Inicio from "../pages/Inicio"
import Farmacia from "../pages/Farmacia"
import Jugueteria from "../pages/Jugueteria"
import SobreNosotros from "../pages/SobreNosotros"
import NotFound from "../pages/NotFound"


export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Inicio />} path="/" />
                <Route element={<Farmacia />} path="/farmacia" />
                <Route element={<Jugueteria />} path="/jugueteria" />
                <Route element={<SobreNosotros />} path="/sobrenosotros" />
                <Route element={<NotFound />} path="*" />
            </Routes>

        </>
    )
}
