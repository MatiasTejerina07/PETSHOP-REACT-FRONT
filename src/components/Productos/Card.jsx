import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";
import { useState } from "react";
import { Alert } from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";


export default function Cards({ title, price, image, quantity, id, addItem }) {

    const [showmessage, showMessage] = useState(false)
    const show = () => {
        showMessage(true)
        setTimeout(() => {
            showMessage(false)
        }, 2500
        )
    }
    return (
        <Card className="w-60">
            <CardHeader shadow={false} floated={false} className="h-36 flex justify-center">
                <img
                    src={image}
                    className="w-36 h-36 object-contain rounded-full"
                />
            </CardHeader>
            <CardBody>
                <div className="flex flex-col items-center justify-between mb-2 gap-4">
                    <Typography color="blue-gray" className="font-medium h-10 text-center font-poppins">
                        {title}
                    </Typography>
                    <div className="flex  gap-1">
                        <Typography color="blue-gray" className="font-medium bg-blue-200 rounded-md p-[3px]">
                            ${price}
                        </Typography>
                        <Typography color="blue-gray" className={`text-[14px] font-poppins ${quantity > 3 ? "bg-green-200 text-[15px] rounded-md font-[500] p-[3px]" : "text-white bg-red-700 font-[500] rounded-md text-[15px] p-[3px]"}`}>
                            Stock:{quantity}
                        </Typography>
                    </div>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">

                </Typography>
            </CardBody>
            <div className="flex flex-col w-full justify-center items-center">
                <p></p>
                <p></p>
                <Anchor to={`/details/${id}`} >
                    <Button variant="text" className="font-poppins mb-2 mt-2">
                        Ver más
                    </Button>
                </Anchor>
            </div>
            <CardFooter className="pt-0">
                <button onClick={show}>
                    {quantity > 0 && (<Button onCl value={id} onClick={addItem}
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >
                        Agregar al Carro
                    </Button>)}
                    <div className="h-5 w-full absolute right-[0px] top-[290px]">
                        {showmessage && (
                            <Alert
                                icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                                className="bg-white border text-[#2ec946] border-l-4 border-[#2ec946] rounded-none font-medium"
                            >
                                Exito al añadir
                            </Alert>
                        )}
                    </div>
                </button>
            </CardFooter>
        </Card>
    );
}