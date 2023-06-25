'use client';

import {Button } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import Image from "next/image";
import lcv_lg from "../../../assets/svg/lcv-lg.svg";
import AnimatedText from "../components/animated_text";
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <Grid container xs={12} spacing={1} sx={{}}>
            {/*<Grid xs={12} md={8} sx={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'center',*/}
            {/*    padding: '5px',*/}
            {/*}}>*/}
            {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
            {/*</Grid>*/}
            <Grid xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '10px'
            }}>
                <AnimatedText text={'Use one of the following to login/signup!'} />
            </Grid>
            <Grid xs={12} sx={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Button variant="contained" onClick={() => signIn('google')}>Google</Button>
            </Grid>

            {/*<Grid xs={12} sx={{*/}
            {/*    display: 'flex',*/}
            {/*    justifyContent: 'flex-end'*/}
            {/*}}>*/}
            {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
            {/*</Grid>*/}
        </Grid>
    )
}