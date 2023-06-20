"use client";

import {createTheme, Theme, ThemeProvider} from "@mui/material";
import {useState} from "react";


const theme1 = createTheme({
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
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );

}