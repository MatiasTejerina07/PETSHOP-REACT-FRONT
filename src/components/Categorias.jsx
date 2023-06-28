import { DrawerCart } from "./Cart/DrawerCart"
export default function Categorias() {
    return (
        <div className='h-full w-full'>
            <div className='w-full flex items-end bg-no-repeat bg-cover bg-center h-[40vh] bg-[url(https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100178.jpg?w=1060&t=st=1687626876~exp=1687627476~hmac=9da511c2d87e426f60d508e14a9815519b50823e34df9e7e75945bb12860c41e)]' style={{ backgroundPosition: '50% 37%' }}>
                <div className='w-full h-full flex justify-between items-center'>
                    <div className='w-full h-56 flex justify-end items-start'>
                        <DrawerCart />
                    </div>
                </div>
            </div>
        </div>
    )
}
