import React from "react";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import { MapPinIcon, BuildingOffice2Icon } from "@heroicons/react/24/outline";

export default function Yo() {
    const [openPopover, setOpenPopover] = React.useState(false);
    const triggers = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };
    const link = () => {

    }
    return (
        <Popover open={openPopover} handler={setOpenPopover}>
            <PopoverHandler {...triggers}>
                <p>Full Stack</p>
            </PopoverHandler>
            <PopoverContent {...triggers} className="max-w-[24rem]">
                <div className="mb-2 flex items-center justify-between gap-4">
                    <Avatar
                        size="md"
                        variant="circular"
                        src="https://avatars.githubusercontent.com/u/127890622?v=4"
                        alt="mat"
                    />
                    <Button
                        variant="filled"
                        color="blue"
                        size="sm"
                        className="font-medium capitalize"
                        onClick={() => link}
                    >
                        <a href="https://www.linkedin.com/in/matias-tejerina-268340264/">
                            Perfil
                        </a>
                    </Button>
                </div>
                <Typography
                    variant="h6"
                    color="blue-gray"
                    className="mb-2 flex items-center gap-2 font-medium"
                >
                    <span>Matias Tejerina</span> •{" "}
                    <a href="#" className="text-sm text-blue-gray-700">
                        @Mat
                    </a>
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                    Full Stack Developer •
                    Amo programar, desarrollar proyectos grandes o chicos, en mis ratos libres los uso para profundizar mis conocimientos y mejorar mis habilidades. Tengo curiosidad por todo el mundo IT, aspiro a continuar mis estudios para llegar hacer Analista en Sistemas
                </Typography>
                <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
                    <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center gap-1 text-xs font-normal"
                    >
                        <MapPinIcon strokeWidth={2} className="-mt-0.5 h-3.5 w-3.5" />
                        Córdoba, Argentina
                    </Typography>
                </div>
            </PopoverContent>
        </Popover>
    );
}