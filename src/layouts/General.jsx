import { Outlet } from "react-router-dom"
import { Navbar } from "./Navbar"
import Footer from "../pages/Footer"
export default function General() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
