import React from "react";
import {
    Collapse,
    Avatar,
    Card,
    Typography,
    CardBody
} from "@material-tailwind/react";
import { useState } from "react";

export default function Sobremi({ image1, image2, image3, name1, name2, name3, description, link, clase1, clase2, clase3, link1, link2, link3, name4, link4, image4, clase4, contenedor }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(cur => !cur);

    return (

        <React.Fragment>
            <p className="bg-transparent" onClick={toggleOpen}>{link}</p>
            <Collapse open={open} className="w-96">
                <Card className="my-4 w-full">
                    <CardBody className="">
                        <Typography className={contenedor}>
                            <div className={clase1}>
                                <a className="flex items-center gap-8" href={link1}>
                                    <Avatar src={image1} alt="avatar" withBorder={true} color="blue" className="w-16 h-16" />
                                    <p className="font-[500] font-poppins">{name1}</p>
                                </a>
                            </div>
                            <div className={clase2}>
                                <a className="flex items-center gap-8" href={link2}>
                                    <Avatar src={image2} alt="avatar" withBorder={true} color="green" className="w-16 h-16" />
                                    <p className="font-[500] font-poppins">{name2}</p>
                                </a>
                            </div>
                            <div className={clase3}>
                                <a className="flex items-center gap-8" href={link3}>
                                    <Avatar src={image3} alt="avatar" withBorder={true} color="red" className="w-16 h-16" />
                                    <p className="font-[500] font-poppins">{name3}</p>
                                </a>
                            </div>
                            <div className={clase4}>
                                <a className="flex items-center gap-8" href={link4}>
                                    <Avatar src={image4} alt="avatar" withBorder={true} color="orange" className="w-16 h-16" />
                                    <p className="font-[500] font-poppins">{name4}</p>
                                </a>
                            </div>
                        </Typography>
                        <Typography className="text-center pt-4">
                            {description}
                        </Typography>
                    </CardBody>
                </Card>
            </Collapse>
        </React.Fragment>
    )
}