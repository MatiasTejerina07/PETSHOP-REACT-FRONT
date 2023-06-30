import Input from '../../components/Inputs'
import { Button, Typography } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../redux/userAction/userAction'
import { useState, useEffect } from 'react'
import { Alert } from "@material-tailwind/react";
import { CheckCircleIcon, InformationCircleIcon, } from "@heroicons/react/24/solid";



const { sign_up, clean_up } = actions
export default function SingUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        photo: ''
    })
    const dispatch = useDispatch()
    let { error, success, google } = useSelector(store => store.user);
    useEffect(() => {
        dispatch(clean_up());

        return () => {
            dispatch(clean_up())
        }
    }, [])
    console.log(error);
    console.log(success);

    useEffect(() => {
        if (error?.exist) {
            setTimeout(() => navigate("/signin"), 2500)

        }
        if (success) {
            if (google) {
                setTimeout(() => navigate("/"), 1500)
            } else {
                setTimeout(() => navigate("/verify"), 1500)
            }

        }


    }, [success, error, google])


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(sign_up({ formData }));

    }



    return (
        <div className='w-full h-full flex'>
            <div className='w-[50%] h-screen bg-[url(https://img.freepik.com/foto-gratis/nina-bonita-embarcarse-gato-perro_8353-5281.jpg?w=1060&t=st=1688097136~exp=1688097736~hmac=34db2a721de559f2792a54eb7c08bc5927af5443297e16e908ecbbc5da76a929)] bg-no-repeat bg-cover bg-center'></div>
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
                        {error.photo} <br />
                        {error.email} <br />
                        {error.name}<br />
                        {error.password}
                    </Alert> : ""}
                    {success ? <Alert
                        icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                        className="bg-[#2ec946]/10 text-[#2ec946] border-l-4 border-[#2ec946] rounded-none font-medium">
                        El Usuario se creo con exito!!
                    </Alert> : ""}
                </div>
                <div className='flex flex-col gap-4 w-96 justify-center items-center'>
                    <div className='flex flex-col  w-56  text-[34px] font-[500] font-poppins'>
                        <p>Mi PETSHOP EN REACT</p>
                    </div>
                    <Input
                        name='name'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        nombre='Ingrese su nombre'
                        type='text'
                    />
                    <Input
                        name='lastName'
                        value={formData.last_name}
                        onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                        nombre='Ingrese su apellido'
                        type='text'
                    />
                    <Input
                        name='email'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        nombre='Ingrese su email'
                        type='email'
                    />
                    <Input
                        name='photo'
                        value={formData.photo}
                        onChange={(e) => setFormData({ ...formData, photo: e.target.value })}
                        nombre='Ingrese su foto'
                        type='url'
                    />
                    <Input
                        name='password'
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        nombre='Ingrese una contraseña'
                        type='password'
                    />
                    <Button className="mt-2" fullWidth onClick={handleSubmit}>
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
