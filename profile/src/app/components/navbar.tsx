"use client";

import * as React from "react";
import MuiAppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import MailSharpIcon from "@mui/icons-material/MailSharp";
import FolderSharpIcon from "@mui/icons-material/FolderSharp";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import { motion } from "framer-motion";
import {styled, useTheme} from "@mui/material";
import {useRouter} from "next/navigation";


const drawerWidth = 240;

const MotionListItem = motion(ListItem);
const MotionList = motion(List);
const MotionDrawer = motion(Drawer);

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

type Props = {
    children: React.ReactNode
}

export default function NavBar({ children }: Props) {

    const router = useRouter();
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);
    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const pages = [
        {
            title: "Home",
            icon: <FolderSharpIcon />,
            href: '/'
        },
        {
            title: "Portfolio",
            icon: <FolderSharpIcon />,
            href: '/portfolio'
        },
        {
            title: "About Me",
            icon: <AccountBoxSharpIcon />,
            href: '/about-me'
        },
        {
            title: "Contact Me",
            icon: <MailSharpIcon />,
            href: '/contact-me'
        }];

    const variants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const liVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -200 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*<Typography variant="h6" noWrap component="div">*/}
                    {/*    Michael Heer*/}
                    {/*</Typography>*/}
                </Toolbar>
            </AppBar>
            <MotionDrawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                animate={open ? "open" : "closed"}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerToggle}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <MotionList variants={variants}>
                    {pages.map((page) => (
                        <MotionListItem key={page.title} disablePadding variants={liVariants}>
                            <ListItemButton onClick={() => {

                                router.push(page.href);

                            }}>
                                <ListItemIcon>
                                    {page.icon}
                                </ListItemIcon>
                                <ListItemText primary={page.title} />
                            </ListItemButton>
                        </MotionListItem>
                    ))}
                </MotionList>
            </MotionDrawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );

}
