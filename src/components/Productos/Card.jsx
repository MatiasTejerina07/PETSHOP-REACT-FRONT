/* import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button
} from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";

export default function Cards({ category, title, price, image, quantity, id, description }) {
    return (
        <Card className="flex-row w-[27rem] h-48 max-w-[48rem]">
            <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
                <img
                    src={image}
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="blue" className="uppercase mb-4">{category}</Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {title}
                </Typography>
                <div className="flex justify-center items-center gap-2 w-56">
                    <Button variant="text" className="font-poppins">
                        $ {price}
                    </Button>
                    <Anchor to={`/details/${id}`} >
                        <Button variant="text" className="font-poppins">
                            See More
                        </Button>
                    </Anchor>
                    <p className={`text-[14px] font-poppins ${quantity > 3 ? "text-green-700 text-[14px]" : "text-red-700 text-[16px]"}`}> stock: {quantity}</p>
                </div>
            </CardBody>
            <div className="flex flex-colw-full h -full placeholder-opacity-100">
                {description}
            </div>
        </Card>
    );
} */
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link as Anchor } from "react-router-dom";

export default function Cards({ category, title, price, image, quantity, id, description }) {
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
                    <Typography color="blue-gray" className="font-medium text-center font-poppins">
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
                {quantity > 0 && (<Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                    Agregar al Carro
                </Button>)}
            </CardFooter>
        </Card>
    );
}