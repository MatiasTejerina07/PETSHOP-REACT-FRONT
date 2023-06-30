import { Typography } from "@material-tailwind/react";
import Sobremi from "../components/Sobremi/Collapse";
const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h5" className="">
                        Mi PetShop en React JS
                        <Typography variant="h9" className="w-96">
                            Proyecto basado en React JS,Node.JS, Express, etc.
                            El proyecto fue pensando para poder ser escalable, tener panel de Administrador, configuración de perfil, etc. <br />
                            Basado en funciones e-commerce, el proyecto ofrece pagos desde la plataforma de Mercado Pago, creación de cuenta, carrito de compras, etc.
                            Las funcionalidades aún estan en desarrollo.
                        </Typography>
                    </Typography>

                    <div className="grid grid-cols-3 justify-end gap-4">
                        <ul>
                            <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">
                                Sobre Mi
                            </Typography>
                            <li className=" py-1.5 text-gray-700 cursor-pointer font-normal transition-colors hover:text-blue-gray-900">
                                <Sobremi clase4={"hidden"} link1={"https://www.linkedin.com/in/matias-tejerina-268340264/"} description={"Amo programar, desarrollar proyectos grandes o chicos, en mis ratos libres los uso para aprender nuevas tecnologías o salgo a correr 🏃. Tengo curiosidad por todo el mundo IT, aspiro a continuar mis estudios para llegar hacer Analista en Sistemas."} name1={"Matias Tejerina"} link={"Desarrollador Full Stack"} clase2={"hidden"} clase3={"hidden"} image1={"https://avatars.githubusercontent.com/u/127890622?v=4"} />
                            </li>
                            <li className=" py-1.5 text-gray-700 cursor-pointer font-normal transition-colors hover:text-blue-gray-900">
                                <Sobremi link={"Estudios"} contenedor={"flex flex-col gap-4"} clase4={"hidden"} clase3={"hidden"} name2={"Actualmente sigo haciendo cursos en tecnologías como: Next, Typescript, React, entre otros. "} image2={"https://th.bing.com/th/id/OIP.QiRvTjL3Kz_hvQ2jo99FwQHaEU?pid=ImgDet&w=1920&h=1120&rs=1"} name1={"Bootcamp de +700hs de desarrollo web Fullstack utilizando MERN stack como tecnologías. MongoDB, Express, React.JS, Node.JS"} image1={"https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/Mindhub/original.jpg?1604703006"} />
                            </li>
                            <li className="py-1.5 text-gray-700 cursor-pointer font-normal transition-colors hover:text-blue-gray-900" >
                                <Sobremi name1={"Nicolas Cirulli"} contenedor={"flex flex-col gap-4"} clase4={"hidden"} name2={"José Zaccaro"} name3={"Facundo Cartolano"} link={"Mentores"} description={"A ellos gracias por el esfuerzo y la dedicación."} link1={"https://www.linkedin.com/in/nicolascirulli/"} link2={"https://www.linkedin.com/in/jose-zaccaro/"} link3={"https://www.linkedin.com/in/cartolanofacundo/"} image1={"https://media.licdn.com/dms/image/D4D03AQGZw7H-jE-xbg/profile-displayphoto-shrink_800_800/0/1679970360555?e=1693440000&v=beta&t=-ZyW7U0kv86Ex_Uqc6EBjaSGlfx3IHQCcxiQDtE7GGI"} image2={"https://media.licdn.com/dms/image/D4D03AQFcFE6rMUAUyQ/profile-displayphoto-shrink_800_800/0/1687898455695?e=1693440000&v=beta&t=3i7Cf4fHq8751pLyudXq-2ijjetkO-Q3mjgc-oDWkqk"} image3={"https://media.licdn.com/dms/image/D4D35AQH8BBC00kjMaw/profile-framedphoto-shrink_800_800/0/1687873180049?e=1688590800&v=beta&t=SWpkkcLSuDysVlGM7BYpasf9Ha-0M4wZO18QoOZcVmw"} clases={"w-16 h-16"} clase1={"flex items-center gap-8"} clase2={"flex items-center gap-8"} clase3={"flex items-center gap-8"} />
                            </li>
                            <li className="py-1.5 text-gray-700 cursor-pointer font-normal transition-colors hover:text-blue-gray-900" >
                                <Sobremi link={"Tecnologías"} contenedor={"flex"} image1={"https://th.bing.com/th/id/R.4a8b4c88841c8e93377815431246d2fb?rik=tJlFPibyHfMffA&pid=ImgRaw&r=0"} image2={"https://th.bing.com/th/id/OIP.tO-vmNhuECi9tXnlqyuaewHaFj?pid=ImgDet&rs=1"} image3={"https://th.bing.com/th/id/OIP.8HeK50CR8kkgEUFphV-LlQHaFj?pid=ImgDet&rs=1"} clases={"w-16 h-16"} clase1={"flex items-center gap-8"} clase2={"flex items-center gap-8"} clase3={"flex items-center gap-8"} image4={"https://th.bing.com/th/id/OIP.htbUdWgFQ3a94PMEvBr_hQHaEO?pid=ImgDet&rs=1"} />
                            </li>
                        </ul>
                        <ul>
                            <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">
                                Recursos
                            </Typography>
                            <li>
                                <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                                    Librerias
                                </Typography>
                                <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                                    Componentes
                                </Typography>
                                <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                                    Información
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
                        &copy; {currentYear} <a href="#">Matias Tejerina</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Typography>
                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Typography>
                        <Typography as="a" href="https://github.com/MatiasTejerina07" className="opacity-80 transition-opacity hover:opacity-100">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}