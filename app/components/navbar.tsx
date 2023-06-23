"use client";

import * as React from "react";
import AppBar, {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
    Menu as MenuIcon,
    Person,
    ChevronLeft,
    ChevronRight,
    Logout,
    PersonAdd,
    Settings,
    Home,
    Shop, MailSharp, AccountBoxSharp
} from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {Avatar, Button, Link, Menu, MenuItem, styled, Tooltip, Typography, useTheme} from "@mui/material";
import {useRouter} from "next/navigation";
import lcv_sm from "../../assets/svg/lcv-sm.svg";
import no_lcv from "../../assets/svg/no-lcv.svg";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'] , weight: '700' });


const drawerWidth = 240;

const MotionListItem = motion(ListItem);
const MotionList = motion(List);
const MotionDrawer = motion(Drawer);
const MotionDivider = motion(Divider);
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);


// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
//     open?: boolean;
// }>(({ theme, open }) => ({
//     // flexGrow: 1,
//     // padding: theme.spacing(3),
//     // transition: theme.transitions.create("margin", {
//     //     easing: theme.transitions.easing.sharp,
//     //     duration: theme.transitions.duration.leavingScreen,
//     // }),
//     // marginLeft: `-${drawerWidth}px`,
//     // ...(open && {
//     //     transition: theme.transitions.create("margin", {
//     //         easing: theme.transitions.easing.easeOut,
//     //         duration: theme.transitions.duration.enteringScreen,
//     //     }),
//     //     marginLeft: 0,
//     // }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//     open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== "open",
// })<AppBarProps>(({ theme, open }) => ({
//     transition: theme.transitions.create(["margin", "width"], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: `${drawerWidth}px`,
//         transition: theme.transitions.create(["margin", "width"], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: "space-between",
// }));

// const MotionDrawerHeader = motion(DrawerHeader);

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
            icon: <Home />,
            href: "/"
        },
        {
            title: "LCV Merch",
            icon: <Shop />,
            href: "/merch/"
        },
        {
            title: "About LCV",
            icon: <AccountBoxSharp />,
            href: "/about-lcv/"
        },
        {
            title: "Contact Us",
            icon: <MailSharp />,
            href: "/contact-us/"
        },
        {
            title: "Join LCV",
            icon: <PersonAdd />,
            href: "/join-lcv/",
            divider: true,
        },
        {
            title: "My Account",
            icon: <Person />,
            href: "/join-lcv/"
        },
        {
            title: "Settings",
            icon: <Settings />,
            href: "/join-lcv/",
            divider: true,
        },
        {
            title: "Logout",
            icon: <Logout />,
            href: "/join-lcv/"
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

        <MotionList variants={variants} className={orbitron.className}>

            {pages.map((page) => (
                <>

                    <MotionListItem key={page.title} disablePadding variants={liVariants}>
                        <ListItemButton onClick={() => router.push(page.href)}>
                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText primary={page.title} className={orbitron.className}/>
                        </ListItemButton>
                    </MotionListItem>

                    {page.divider ? <MotionDivider variants={liVariants}/> : ''}

                </>

            ))}
        </MotionList>

    </>);

    return (
        <Box className={orbitron.className} sx={{
            display: "flex",
            justifyContent: 'space-between',
        }}>
            <CssBaseline />
            <AppBar position="fixed" className={orbitron.className}>
                <Toolbar className={orbitron.className} sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '100%'
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/*<Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>*/}
                    {/*    <Image src={no_lcv} alt={'Logo without LCV'} />*/}
                    {/*</Box>*/}
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
                        className={orbitron.className}
                    >

                        <MotionDrawer
                            variant="temporary"
                            open={open}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            animate={open ? "open" : "closed"}
                            initial={'closed'}
                            className={orbitron.className}
                        >
                            {drawer}
                        </MotionDrawer>
                        <MotionDrawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open={true}
                            animate={'open'}
                            initial={'closed'}
                            className={orbitron.className}
                        >
                            {drawer}
                        </MotionDrawer>
                    </Box>
                    <MotionBox sx={{
                        display: 'flex',
                        flexGrow: 1,
                        justifyContent: 'flex-end',
                        // alignItems: 'end'
                    }}>
                        <Typography variant={'h6'} className={orbitron.className}>
                            Lake County Veterans
                        </Typography>

                    </MotionBox>
                </Toolbar>
            </AppBar>

            <Box sx={{
                flexGrow: {
                    sm: 0,
                    md: 1
                },
                padding: theme.spacing(3),
                // transition: theme.transitions.create("margin", {
                //     easing: theme.transitions.easing.sharp,
                //     duration: theme.transitions.duration.leavingScreen,
                // }),
                paddingLeft: {
                    sm: 0,
                    md: `-${drawerWidth}px`
                },
            }}>
                <MotionBox variants={liVariants} sx={{
                    display: "flex",
                    // alignItems: "center",
                    padding: 1,
                    ...theme.mixins.toolbar,
                    justifyContent: "space-between",
                }} />
                {children}
            </Box>
        </Box>
    );

}
