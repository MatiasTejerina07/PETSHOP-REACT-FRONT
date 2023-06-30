import Input from '../../components/Inputs'
import { Button, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Google from "./Google"
import actions from '../../redux/userAction/userAction'
import googleAction from "../../redux/userAction/googleActions"
import { Alert } from "@material-tailwind/react";
import { CheckCircleIcon, InformationCircleIcon, } from "@heroicons/react/24/solid";
const { sign_in_google } = googleAction

const { sign_in, clean_up } = actions
export default function SignIn() {
    let navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        constraseña: ""
    })
    const { error, success, google } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(clean_up())
        return () => {
            dispatch(clean_up())
        }
    }, [])
    useEffect(() => {
        if (error?.credentials) {
            if (google) {
                setTimeout(() => { navigate("/register") }, 1500)
            } else {

            }
        }
        if (error?.verify) {
            toast.error("You are not verify")
            setTimeout(() => toast.error("Please verify your email"), 300)

            setTimeout(() => { navigate("/verify") }, 1500)

        }
        if (success) {
            setTimeout(() => { navigate("/") }, 1500)
        }

    }, [error, success])
    console.log(error);

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(sign_in(data));

    }

    return (
        <div className='w-full h-full flex'>
            <div className='w-[50%] h-screen bg-[url(https://img.freepik.com/foto-gratis/accesorios-mascotas-comida-juguete-vista-superior_93675-128520.jpg?w=1060&t=st=1688096735~exp=1688097335~hmac=ba7a1c124fc95a9ed572810a499df792db4e0e351c7bb8df9791ec8495600332)] bg-no-repeat bg-cover bg-right'>

            </div>
            <div className='w-[50%] h-screen flex flex-col  justify-center items-center'>
                <div className='w-96'>
                    {error ? <Alert
                        color="red"
                        icon={
                            <InformationCircleIcon
                                strokeWidth={2}
                                className="h-6 w-6"
                            />
                        }
                    >
                        {error?.credential}
                    </Alert> : ""}
                    {success ? <Alert
                        icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                        className="bg-[#2ec946]/10 text-[#2ec946] border-l-4 border-[#2ec946] rounded-none font-medium">
                        Inicio de sesión con exito
                    </Alert> : ""}
                </div>
                <div className='flex  w-full h-48 justify-center items-center  text-[34px] font-[500] font-poppins animate-fade-in'>
                    <p>Mi PETSHOP EN REACT</p>
                </div>
                <div className='flex flex-col gap-4 w-96 justify-center items-center'>
                    <Input nombre={"Ingrese su email"} onChange={(e) => setData({ ...data, email: e.target.value })} type={"email"} />
                    <Input nombre={"Ingrese una contraseña"} onChange={(e => setData({ ...data, constraseña: e.target.value }))} type={"password"} />
                    <Button onClick={handleSubmit} className="mt-2" fullWidth>
                        Ingresa
                    </Button>
                    <Google action={sign_in_google} />

                    <Typography color="gray" className="mt-2 text-center font-normal">
                        No tienes aún una cuenta ?{" "}
                        <NavLink to={'/signup'} className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            Registrate
                        </NavLink>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
