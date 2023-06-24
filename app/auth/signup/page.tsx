'use client';

import Grid from '@mui/system/Unstable_Grid';
import Image from "next/image";
import lcv_lg from "../../../assets/svg/lcv-lg.svg";
import AnimatedText from "../../components/animated_text";
import {motion} from "framer-motion";

const MotionGrid = motion(Grid);

export default function Signup() {

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
        </Grid>
    )
}