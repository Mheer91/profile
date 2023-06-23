'use client';

import Image from 'next/image'
import styles from './page.module.css'
import {classes} from "../util/std";
import {Grid, Paper, styled} from "@mui/material";
import lcv_lg from "../assets/svg/lcv-lg.svg"
import Box from "@mui/material/Box";
import {ReactNode} from "react";

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
    <Grid container xs={12}>
        {/*<Box sx={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center'*/}
        {/*}}>*/}
        {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
        {/*</Box>*/}
        <Grid xs={6} md={8} sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Image src={lcv_lg} alt={'LCV Large Logo'} />
        </Grid>
        <Grid xs={6} md={4}>
            <Item>xs=6 md=4</Item>
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
    </Grid>
  )
}
