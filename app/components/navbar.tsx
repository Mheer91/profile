"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
    Menu as MenuIcon,
    Person,
    ChevronLeft,
    ChevronRight,
    Logout,
    Login,
    PersonAdd,
    Settings,
    Home,
    Shop, MailSharp, AccountBoxSharp
} from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import { useState} from "react";
import {Button, Typography, useTheme, styled, Link} from "@mui/material";
import {useRouter} from "next/navigation";
import lcv_sm from "../../assets/svg/lcv-sm.svg";
import Image from "next/image";
import AnimatedText from "./animated_text";
import {motion} from "framer-motion";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";

const MotionListItem = motion(ListItem);
const MotionList = motion(List);
const MotionDrawer = motion(Drawer);
const MotionDivider = motion(Divider);
const MotionBox = motion(Box);


const drawerWidth = 240;


const Main = styled('main')(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
}));

type Props = {
    children: React.ReactNode
}

export default function NavBar({ children }: Props) {

    const router = useRouter();
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    const pages = [
        {
            title: "Home",
            icon: <Home />,
            href: "/"
        },
        {
            title: "LCV Merch",
            icon: <Shop />,
            href: "/merch"
        },
        {
            title: "About LCV",
            icon: <AccountBoxSharp />,
            href: "/about-lcv"
        },
        {
            title: "Contact Us",
            icon: <MailSharp />,
            href: "/contact-us"
        },
        {
            title: "Join LCV",
            icon: <PersonAdd />,
            href: "/join-lcv",
            divider: true,
        },
        {
            title: "My Account",
            icon: <Person />,
            href: "/join-lcv"
        },
        {
            title: "Settings",
            icon: <Settings />,
            href: "/join-lcv",
            divider: true,
        },
        {
            title: "Login",
            icon: <Login />,
            href: "/auth/login"
        }];

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

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
                delayChildren: 1,
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

    const drawer = (<>

        <MotionBox variants={liVariants} sx={{
            display: 'flex',
            justifyContent: {
                sm: 'space-between',
                md: 'center'
            },
            alignItems: 'center',
            padding: 0.87,
        }}>

            <Button
                onClick={() => router.push('/')}
            >
                <Image src={lcv_sm} alt={'LCV Small Logo'} />
            </Button>

            <IconButton onClick={handleDrawerToggle} sx={{
                display: {
                    xs: 'block',
                    md: 'none'
                }
            }}>
                {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>

        </MotionBox>

        <MotionDivider variants={liVariants} />

        <MotionList variants={variants}>

            {pages.map((page, index) => (

                <Box key={`${page.title}`}>

                    <MotionListItem disablePadding variants={liVariants}>

                        <ListItemButton onClick={() => {
                            router.push(page.href);
                            setOpen(false);
                        }}>

                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>

                            <ListItemText primary={page.title}/>

                        </ListItemButton>

                    </MotionListItem>

                    {page.divider ? <MotionDivider variants={liVariants}/> : ''}

                </Box>

            ))}

        </MotionList>

    </>);

    return (
        <Box sx={{
            display: "flex",
            justifyContent: 'space-between',
        }}>

            <CssBaseline />

            <AppBar position="fixed">

                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%'
                }}>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{
                            mr: 2,
                            ...(open && {
                                display: "none"
                            })
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        component="nav"
                        sx={{
                            width: {
                                sm: drawerWidth
                            },
                            flexShrink: {
                                sm: 0
                            }
                        }}
                        aria-label="mailbox folders"
                    >

                        {/*Mobile Drawer*/}
                        <MotionDrawer
                            variant="temporary"
                            open={open}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: {
                                    xs: 'block',
                                    sm: 'none'
                                },
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box',
                                    width: drawerWidth
                                },
                            }}
                            animate={open ? "open" : "closed"}
                            initial={'closed'}
                        >
                            {drawer}
                        </MotionDrawer>

                        {/*Desktop Drawer*/}
                        <MotionDrawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open={true}
                            animate={'open'}
                            initial={'closed'}
                        >
                            {drawer}
                        </MotionDrawer>

                    </Box>

                    <MotionBox sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                    }}>

                        <Link variant={'h6'} component={'button'} onClick={() => router.push('/')} sx={{
                            fontWeight: 700,
                            color: 'inherit',
                            backgroundColor: 'inherit',
                            border: 'none',
                            textDecoration: 'none',
                        }}>
                            <AnimatedText text={'LAKE COUNTY VETERANS'} />
                        </Link>

                    </MotionBox>

                </Toolbar>

            </AppBar>

            <Box sx={{
                flexGrow: 1,
                // padding: '5px',
                height: '100vh'
            }}>

                <Box sx={{
                    display: "flex",
                    padding: 1,
                    ...theme.mixins.toolbar,
                    justifyContent: "space-between",
                }} />

                <Main sx={{
                    padding: '15px',
                    marginLeft: {
                        md: `${drawerWidth}px`
                    }
                }}>
                    {children}
                </Main>

            </Box>

        </Box>

    );

}
