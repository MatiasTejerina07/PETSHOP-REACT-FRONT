import Imagen from "../layouts/Imagen"

export default function Inicio() {
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <Imagen />
            <div className='w-full flex justify-center items-center'>
                <p className='text-[24px] font-poppins font-[500]'>YOU VETERINARY</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className='pt-4'>
                    <img src="https://th.bing.com/th/id/OIP.yKdykANbiXAEeUR2ywrpkwHaE8?pid=ImgDet&rs=1" alt="Descripción imagen" className="h-80 w-36 object-cover object-left rounded-t-lg rounded-b-lg" />
                </div>
                <div>
                    <img src="https://th.bing.com/th/id/OIP.yKdykANbiXAEeUR2ywrpkwHaE8?pid=ImgDet&rs=1" alt="Descripción imagen" className="h-80 w-36 object-cover object-center rounded-t-lg rounded-b-lg " />
                </div>
                <div className='pt-4'>
                    <img src="https://th.bing.com/th/id/OIP.yKdykANbiXAEeUR2ywrpkwHaE8?pid=ImgDet&rs=1" alt="Descripción imagen" className="h-80 w-36 object-cover object-right rounded-t-lg rounded-b-lg" />
                </div>
            </div>
            <p className="text-center p-8 font-poppins font-[400]">
                Welcome to our Veterinary Clinic home page!

                At our clinic, we are passionate about the care and well-being of your pets. Here you will find a team of dedicated, animal-loving professionals ready to provide you with the best care possible.

                Our goal is to provide high quality, personalized veterinary services for each of our patients. Whether you need a routine consultation, specialized medical care or advice on your pet's daily care, we are here to help.

                Explore our website to learn more about our services, meet our veterinary team and discover helpful tips on animal health and wellness. You can also find information about our facilities, hours of operation and how to make an appointment.

                At Clinica Veterinaria, we believe in the importance of prevention and education, so we also offer educational resources and informative articles to help you properly care for your pet.

                Thank you for visiting our home page and trusting us with the health of your beloved furry companions. We hope to see you soon at our veterinary clinic!
            </p>
        </div>
    )
}
