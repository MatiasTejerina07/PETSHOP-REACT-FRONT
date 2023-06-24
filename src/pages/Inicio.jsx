import Imagen from "../layouts/Imagen"

export default function Inicio() {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-no-repeat bg-cover bg-[url(https://img.freepik.com/foto-gratis/cerca-veterinario-cuidando-perro_23-2149100223.jpg?w=1060&t=st=1687621421~exp=1687622021~hmac=84b37082a66d9e98c0bd964de328aeca7986dcaa64de88041e0407ace2cdef04)]'>
            <Imagen />
            <div className='w-full h-full pb-4 flex justify-center items-center'>
                <p className='text-[36px] text-white font-poppins font-[500]'>YOUR VETERINARY</p>
            </div>
            <div className="pb-4">
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
            </div>
            <div className="h-full w-full mb-10 pt-10">
                <p className="text-center text-[16px] pl-12 pr-12  font-poppins font-[500] animate-fade-in">
                    <span className="text-[28px] font-poppins">Welcome to our Veterinary Clinic home page!</span><br />

                    At our clinic, we are passionate about the care and well-being of your pets. Here you will find a team of dedicated, animal-loving professionals ready to provide you with the best care possible.

                    Our goal is to provide high quality, personalized veterinary services for each of our patients. Whether you need a routine consultation, specialized medical care or advice on your pet's daily care, we are here to help.

                    Explore our website to learn more about our services, meet our veterinary team and discover helpful tips on animal health and wellness.
                </p>
            </div>
        </div>
    )
}
