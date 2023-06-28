import { Link as Anchor, NavLink, useNavigation, useNavigate } from "react-router-dom"
import { Menu, Nosotros } from "../assets/Icons"
import { useUserContext } from "../context/userContext";

import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
    HomeIcon
} from "@heroicons/react/24/solid";

export function Navbar() {
    const [open, setOpen] = React.useState(false)
    const openDrawer = () => setOpen(true)
    const closeDrawer = () => setOpen(false)

    const navigate = useNavigation()
    const { user, setUser } = useUserContext()


    return (
        <React.Fragment>
            <div className="fixed z-10 flex px-8 py-12 bg-transparent animate-slide-down ">
                <Button className="bg-transparent p-0 shadow-transparent rounded-full " onClick={openDrawer}><Menu /></Button>
                <Drawer open={open} onClose={closeDrawer}>
                    <div className="mb-2 flex items-center justify-between p-4">
                        <Typography variant="h5" color="blue-gray">
                            Menu
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                        </IconButton>
                    </div>
                    <List>
                        <NavLink to={'/'}>
                            <ListItem>
                                <ListItemPrefix>
                                    <HomeIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Inicio
                            </ListItem>
                        </NavLink>
                        {user && (
                            <>
                                <ListItem>
                                    <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Dashboard (Admin)
                                </ListItem>
                                <NavLink to={'/productos'}>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ShoppingBagIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        Nuestros Productos
                                    </ListItem>
                                </NavLink>
                                <ListItem>
                                    <ListItemPrefix>
                                        <InboxIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Notificaciones (Proximamente)
                                    <ListItemSuffix>
                                        <Chip
                                            value="0"
                                            size="sm"
                                            variant="ghost"
                                            color="blue-gray"
                                            className="rounded-full"
                                        />
                                    </ListItemSuffix>
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <UserCircleIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                                <ListItem onClick={() => setUser(false)}>
                                    <ListItemPrefix>
                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log Out
                                </ListItem>
                            </>
                        )}


                        <NavLink to={'/sobrenosotros'}>
                            <ListItem>
                                <ListItemPrefix>
                                    <Nosotros />
                                </ListItemPrefix>
                                Sobre Nosotros
                            </ListItem>
                        </NavLink>
                        <NavLink to={'/signin'}>
                            {!user && (
                                <ListItem onClick={() => setUser(true)}>
                                    <ListItemPrefix>
                                        <PowerIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Log In
                                </ListItem>
                            )}
                        </NavLink>
                    </List>
                </Drawer>
            </div>
        </React.Fragment>
    );
}