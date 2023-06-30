import { Carousel, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import TextCarousel from "./TextCarousel";
export default function Carusel() {
    const navigate = useNavigate()
    let { user } = useSelector(store => store.user)
    const handleNavigate = (path) => {
        if (user) {
            navigate(path)
        } else {
            navigate("/signin")
        }
    }
    return (
        <Carousel className="">
            <div className="relative h-[420px] w-full">
                <img
                    src="https://img.freepik.com/foto-gratis/retrato-gato-hermoso-cerca_23-2149214414.jpg?w=1060&t=st=1688150084~exp=1688150684~hmac=093920ad411b3fd48417363a9f27a20340d55a97b27758e9fe3b9cc11dab0b97"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-[420px] w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Mi PETSHOP EN REACT
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Amamos a tus animales, es por eso que estamos aquí para prindarte todo lo que este a nuestro alcance. <br /> Inicia sesión para ver nuestros productos

                        </Typography>
                        <div className="flex justify-center gap-2">

                            <Button onClick={() => handleNavigate('/productos')} size="lg" color="white">{user ? "Productos" : "Inicia Sesión"}
                            </Button>
                            <Button hidden size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[420px] w-full">
                <img
                    src="https://img.freepik.com/foto-gratis/disparo-enfoque-selectivo-adorable-golden-retriever-al-aire-libre_181624-45215.jpg?w=996&t=st=1688149910~exp=1688150510~hmac=13eb617e198a87a9e3cac691a4d0c68af00e091c668b1343da3d2aed2bc0d66f"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-[420px] w-full items-center bg-black/75">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            Nuestro mejor amigo
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 h-20 opacity-80"
                        >
                            ¿Datos curiosos?
                            <TextCarousel />
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Novedades
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[420px] w-full">
                <img
                    src="https://img.freepik.com/foto-gratis/hermoso-gato-domestico-tendido-valla_181624-43207.jpg?w=1060&t=st=1688149972~exp=1688150572~hmac=636778709462de50dc979743703a67c3b8231cb0c408def4aacebd70364ec9e2"
                    alt="image 3"
                    className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 grid h-[420px] w-full items-end bg-black/75">
                    <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            The Beauty of Nature
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            Somos Mi PETSHOP EN REACT, encontra mas información de nosotros, quienes somos, y el amor que nos impulsa.
                        </Typography>
                        <div className="flex gap-2">
                            <Button onClick={() => handleNavigate("/sobrenosotros")} size="lg" color="white">
                                Sobre Nosotros
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}