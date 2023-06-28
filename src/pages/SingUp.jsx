import React from 'react'
import Input from '../components/Inputs'
import { Button, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

export default function SingUp() {
    return (
        <div className='w-full h-full flex'>
            <div className='w-[50%] h-screen bg-[url(https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100179.jpg?t=st=1687972660~exp=1687973260~hmac=3a862c8589eca1df631185098dfbc75da1246bb86df459fa04d495767b6e6376)] bg-no-repeat bg-cover bg-center'>

            </div>
            <div className='w-[50%] h-screen flex  justify-center items-center'>
                <div className='flex flex-col gap-4 w-96 justify-center items-center'>
                    <div className='flex flex-col  w-56  text-[34px] font-[500] font-poppins'>
                        <p>Mi PETSHOP EN REACT</p>
                    </div>
                    <Input nombre={"Ingrese su nombre"} type={"text"} />
                    <Input nombre={"Ingrese su apellido"} type={"text"} />
                    <Input nombre={"Ingrese su email"} type={"email"} />
                    <Input nombre={"Ingrese una contraseña"} type={"password"} />
                    <Button className="mt-2" fullWidth>
                        Registrate
                    </Button>
                    <Typography color="gray" className="text-center font-normal">
                        Los campos con <span className='text-red-600'>(*)</span> son requeridos
                    </Typography>
                    <Typography color="gray" className="mt-2 text-center font-normal">
                        Ya tienes una cuenta ?{" "}
                        <NavLink to={'/signin'} className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            Inicia Sesión
                        </NavLink>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
