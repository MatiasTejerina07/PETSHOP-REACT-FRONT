import Input from '../components/Inputs'
import { Button, Typography } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

export default function SignIn() {
    return (
        <div className='w-full h-full flex'>
            <div className='w-[50%] h-screen bg-[url(https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100196.jpg?w=1060&t=st=1687977035~exp=1687977635~hmac=36343c772a52dc842f519579c2d1e15a53243ed346bf5a339764f1516d02898b)] bg-no-repeat bg-cover bg-center'>

            </div>
            <div className='w-[50%] h-screen flex flex-col  justify-center items-center'>
                <div className='flex  w-full h-48 justify-center items-center  text-[34px] font-[500] font-poppins'>
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
