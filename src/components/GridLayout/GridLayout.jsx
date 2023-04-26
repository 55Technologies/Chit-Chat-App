import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { getGridLayoutStyles } from './GridLayout.styles';
import { useState } from 'react';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import ViewPostButton from '../ViewPostButton/ViewPostButton';

import postOne from '../../assets/post1.jpg';
import postTwo from '../../assets/post2.jpg';
import postThree from '../../assets/pos3.jpg';
import postFour from '../../assets/post4.jpg';
import postFive from '../../assets//post5.jpg';
import postSix from '../../assets/post6.jpg';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@emotion/react';

const GridLayout = ({ children }) => {
    const { classes } = getGridLayoutStyles();

    const userPosts = [
        {
            postMedia: postOne,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },

        {
            postMedia: postTwo,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },

        {
            postMedia: postThree,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },

        {
            postMedia: postFour,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },

        {
            postMedia: postFive,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },

        {
            postMedia: postSix,
            postCaption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever   since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ];

    return (
        <Grid container className={classes.gridContainerStyles}>
            {
                userPosts.map((gridItem)=>{
                    return(
                        <Grid item lg={4} md={6} sm={6} xs={12} className={classes.gridItemStyles}>
                            <Box className={classes.userPostContStyles}>
                                <img src={gridItem.postMedia} alt="" className={classes.userPostStyles}/>
                            </Box>
                            <Box className={classes.postCaptionCont}>
                                <Typography variant="h6" className={classes.postCaption}>{gridItem.postCaption}</Typography>
                            </Box>
                            <Box className={classes.viewPostContStyles}>
                                <Link to="/feed">
                                    <ViewPostButton children={<RemoveRedEyeIcon fontSize="small"/>}/>
                                </Link>
                            </Box>
                        </Grid>
                    );
                })
            }
        </Grid>
    );
}

export default GridLayout;