import { Fragment, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";

export default function Checkout({ handleOpen }) {
    /* const [open, setOpen] = useState(true);

    const handleOpen = () => setOpen(!open);
 */
    return (
        <Fragment>
            <Button onClick={handleOpen}>
                Felicitaciones
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>
                    <Typography variant="h5" color="blue-gray">

                    </Typography>
                </DialogHeader>
                <DialogBody divider className="grid place-items-center gap-4">
                    <BellIcon className="h-16 w-16 text-red-500" />
                    <Typography color="red" variant="h4">
                        ¡MUCHAS GRACIAS!
                    </Typography>
                    <Typography className="text-center font-normal">
                        Has finalizado el proceso de comprar, de agradecemos por la confianza, en minutos recibiras un email con tu factura.
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={handleOpen}>
                        Cerrar
                    </Button>
                    <Button variant="gradient" onClick={handleOpen}>
                        Ok, esta bien!
                    </Button>
                </DialogFooter>
            </Dialog>
        </Fragment>
    );
}