import {useState} from "react";
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Typography} from "@mui/material";
import {red} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { Favorite, Share } from "@mui/icons-material";

type cardProps = {
    title: string,
    subTitle?: string,
    image?: boolean,
    imageSrc?: string,
    sharable?: boolean,
}
export default function ContentCard(props: cardProps) {

    const { title, subTitle, image, imageSrc } = props;

    return (
        <Card sx={{
            maxWidth: 345,
            margin: '10px'
        }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title="CLIPS"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Check out Forehead and BloodRayne's latest clips!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Favorite />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}
