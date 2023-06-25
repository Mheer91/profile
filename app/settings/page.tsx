'use client';

import Grid from '@mui/system/Unstable_Grid';
import AnimatedText from "../components/animated_text";
import {useSession} from "next-auth/react";
import {Avatar} from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Settings() {

    const { data: session } = useSession();


    return (
        <Grid container xs={12} spacing={1} sx={{}}>

            { session?.user ? (<>
                <Grid xs={12} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'left',
                    marginBottom: '10px'
                }}>
                    <Grid xs={12} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Avatar src={session.user.image!} /> &nbsp; &nbsp; <AnimatedText text={session.user.name!} />
                    </Grid>
                    <Divider />
                    <Grid xs={12}>
                        <AnimatedText text={session.user.email!} />
                    </Grid>
                </Grid>
            </>) : ''}
        </Grid>
    )
}