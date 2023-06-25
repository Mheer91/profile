'use client';

import Image from 'next/image'
import styles from './page.module.css'
import {classes} from "../util/std";
import { styled} from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import lcv_lg from "../assets/svg/lcv-lg.svg"
import Box from "@mui/material/Box";
import {ReactNode} from "react";
import AnimatedText from "./components/animated_text";
import {motion} from "framer-motion";

const MotionGrid = motion(Grid);

const Item = styled('div')(({ theme }) => ({
    backgroundColor: 'blue',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? 'orange' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));


export default function Home() {
  return (
    <Grid container xs={12} spacing={1} sx={{}}>
        <MotionGrid>

        </MotionGrid>
        {/*<Box sx={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center'*/}
        {/*}}>*/}
        {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
        {/*</Box>*/}
        <Grid xs={12} md={8} sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: '5px',
        }}>
            <Image src={lcv_lg} alt={'LCV Large Logo'} />
        </Grid>
        <Grid xs={12} md={4}>
            <AnimatedText text={'Lake County Veterans'} />
        </Grid>
        {/*<Grid xs={6} md={4}>*/}
        {/*    <Item>xs=6 md=4</Item>*/}
        {/*</Grid>*/}
        {/*<Grid xs={6} md={8}>*/}
        {/*    <Item>xs=6 md=8</Item>*/}
        {/*</Grid>*/}
        <Grid xs={12} sx={{
            display: 'flex',
            justifyContent: 'flex-end'
        }}>
            <Image src={lcv_lg} alt={'LCV Large Logo'} />
        </Grid>
        <Grid>
            <iframe
                src="https://player.twitch.tv/?channel=ixbloodraynexi&parent=thelcv.com"
                height="400px"
                width="400px"
                allowFullScreen>
            </iframe>
        </Grid>
    </Grid>
  )
}
