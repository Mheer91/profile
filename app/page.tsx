'use client';

import Image from 'next/image'
import styles from './page.module.css'
import {classes} from "../util/std";
import {styled, Typography, useTheme} from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import lcv_lg from "../assets/svg/lcv-lg.svg"
import Box from "@mui/material/Box";
import {ReactNode} from "react";
import AnimatedText from "./components/animated_text";
import {motion} from "framer-motion";
import ContentCard from "./components/card";

const MotionGrid = motion(Grid);

const Item = styled('div')(({ theme }) => ({
    backgroundColor: 'blue',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? 'orange' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
}));

//TODO: Add a carousel with recent clips
//TODO: Add a carousel with recent VoD's
//TODO: Add an event banner
//TODO: Add a few cards with recommended content
//TODO: Convert adam stream to the twitch panel component
//TODO: Figure out best way to get the live statuses

export default function Home() {

    const theme = useTheme();

  return (
    <Grid container xs={12} spacing={1} sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }}>
        {/*<Box sx={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center'*/}
        {/*}}>*/}
        {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
        {/*</Box>*/}
        {/*<Grid xs={12} md={8} sx={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center',*/}
        {/*    padding: '5px',*/}
        {/*}}>*/}
        {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
        {/*</Grid>*/}
        <Grid xs={12} sx={{
            height: '300px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Typography sx={{
                fontWeight: '800',
                fontSize: {
                    xs: '110px',
                    md: '200px'
                }
            }}>
                <AnimatedText text={'L C V'} />
            </Typography>
        </Grid>

        {/*<Grid xs={12} sx={{*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'flex-end'*/}
        {/*}}>*/}
        {/*    <Image src={lcv_lg} alt={'LCV Large Logo'} />*/}
        {/*</Grid>*/}
        <Grid xs={12} sx={{
            display: {
                xs: 'none',
                md: 'flex'
            },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
        }}>
            <AnimatedText text={'IxBloodRaynexI'} />
            <iframe
                src="https://player.twitch.tv/?channel=ixbloodraynexi&parent=thelcv.com"
                height="400px"
                width="80%"
                allowFullScreen>
            </iframe>
        </Grid>

        <Grid xs={12} sx={{
            display: {
                xs: 'flex',
                md: 'none'
            },
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '10px',
            marginBottom: '10px'
        }}>
            <AnimatedText text={'IxBloodRaynexI'} />
            <iframe
                src="https://player.twitch.tv/?channel=ixbloodraynexi&parent=thelcv.com"
                height="400px"
                width="100%"
                allowFullScreen>
            </iframe>
        </Grid>

        <Grid xs={12} sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
        }}>
            <ContentCard title={'CLIPS'} />
            <ContentCard title={'VOD&apos;s'} />
            <ContentCard title={'LIVE STREAMS'} />
            <ContentCard title={'dad'} />
            {/*<ContentCard />*/}
            {/*<ContentCard />*/}
        </Grid>

        <Grid xs={12} sx={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            <Image src={lcv_lg} alt={'LCV Large Logo'} />
        </Grid>
    </Grid>
  )
}
