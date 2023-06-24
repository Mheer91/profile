"use client";

import {createTheme, Theme, ThemeProvider} from "@mui/material";
import {useState} from "react";
import { SessionProvider } from "next-auth/react";


const theme1 = createTheme({
    typography: {
        fontFamily: 'inherit',
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#00ffff',
        },
        secondary: {
            main: '#9c27b0',
        },
        text: {
            primary: '#ffffff',
        },
        background: {
            paper: '#210341',
        },
    },
});


type Props = {
    children: React.ReactNode
}

export default function Providers({ children }: Props) {

    const [theme, setTheme] = useState<Theme>(theme1);

    return (
        <SessionProvider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </SessionProvider>
    );

}