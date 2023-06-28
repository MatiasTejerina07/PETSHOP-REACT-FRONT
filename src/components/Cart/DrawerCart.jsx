import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Cart } from "../../assets/Icons";
import { XMarkIcon } from "@heroicons/react/24/outline"
import ItemsCart from "./Cart";

export function DrawerCart() {
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true)
    const closeDrawerRight = () => setOpenRight(false);
    return (
        <React.Fragment>
            <div className="flex flex-wrap gap-4">
                <Button className="rounded-full mr-4 p-4" onClick={openDrawerRight}><Cart /></Button>
            </div>
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4"
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Tu Carrito

                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerRight}
                    >
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <Typography variant="h5" color="blue-gray">

                    <ItemsCart />
                </Typography>
            </Drawer>
        </React.Fragment>
    );
}