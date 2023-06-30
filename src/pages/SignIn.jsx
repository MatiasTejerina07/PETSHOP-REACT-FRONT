import Input from '../components/Inputs'
import { Button, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className='w-full h-full flex'>
            <div className='w-[50%] h-screen bg-[url(https://img.freepik.com/foto-gratis/accesorios-mascotas-comida-juguete-vista-superior_93675-128520.jpg?w=1060&t=st=1688096735~exp=1688097335~hmac=ba7a1c124fc95a9ed572810a499df792db4e0e351c7bb8df9791ec8495600332)] bg-no-repeat bg-cover bg-right'>

            </div>
            <div className='w-[50%] h-screen flex flex-col  justify-center items-center'>
                <div className='flex  w-full h-48 justify-center items-center  text-[34px] font-[500] font-poppins animate-fade-in'>
                    <p>Mi PETSHOP EN REACT</p>
                </div>
                <div className='flex flex-col gap-4 w-96 justify-center items-center'>
                    <Input nombre={"Ingrese su email"} type={"email"} />
                    <Input nombre={"Ingrese una contraseña"} type={"password"} />
                    <Button className="mt-2" fullWidth>
                        Ingresa
                    </Button>

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
