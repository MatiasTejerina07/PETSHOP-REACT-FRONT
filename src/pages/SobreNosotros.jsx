import React from 'react'

export default function SobreNosotros() {
    return (
        <div className='flex flex-col h-screen w-full'>
            <div className='flex w-full h-96 bg-cover bg-center bg-[url(https://img.freepik.com/foto-gratis/lindo-perro-dueno-tienda-mascotas_23-2148872549.jpg?w=1060&t=st=1688006476~exp=1688007076~hmac=6b44cf5af95a6f0c0fd763bb6c5f6389a2cbdb1c726fb1f40f49e6a40556009f)]'>

            </div>
            <div className='flex bg-gray-50 animate-fade-in'>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className='pt-4'>
                        <img src="https://img.freepik.com/fotos-premium/cachorro-bulldog-frances-gato_87557-8348.jpg?w=1060" alt="Descripción imagen" className="h-80 w-40 object-cover object-left rounded-t-lg rounded-b-lg" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/fotos-premium/cachorro-bulldog-frances-gato_87557-8348.jpg?w=1060" alt="Descripción imagen" className="h-80 w-40 object-cover object-center rounded-t-lg rounded-b-lg " />
                    </div>
                    <div className='pt-4'>
                        <img src="https://img.freepik.com/fotos-premium/cachorro-bulldog-frances-gato_87557-8348.jpg?w=1060" alt="Descripción imagen" className="h-80 w-40 object-cover object-right rounded-t-lg rounded-b-lg" />
                    </div>
                </div>
                <div className="h-full w-[60%] mb-10 pt-10 animate-slide-left">
                    <p className="text-center text-[16px] pl-12 pr-12  font-poppins font-[500] animate-fade-in">
                        <span className="text-[28px] font-poppins">Mi PETSHOP EN REACT</span><br />

                        En nuestra petshop, nos apasiona el cuidado y el bienestar de tus mascotas. Aquí encontrarás un equipo de profesionales dedicados y amantes de los animales dispuestos a proporcionarle la mejor atención posible.

                        Nuestro objetivo es proporcionar servicios de ventas personalizados y de alta calidad para cada uno de nuestros pacientes. Tanto si necesitas una consulta rutinaria, atención especial o consejos sobre el cuidado diario de tu mascota, estamos aquí para ayudarte.

                        Explora nuestro sitio para obtener más información sobre nuestros servicios, conocer a nuestro equipo y descubrir consejos útiles sobre la salud y el bienestar de los animales.
                    </p>
                </div>
            </div>

        </div>
    )
}
