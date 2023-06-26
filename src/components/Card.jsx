import {
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
}