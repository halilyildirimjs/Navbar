import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from 'react-router-dom';
import DashBoardIcon from '../../Assets/Image/Dashboard/Dashboard.png';
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Notifications from "./Notifications";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flexGrow: 1
    },
    AppBarStyles: {
        background: 'linear-gradient(86deg, #C24DC0 7.06%, #EF4E9B 100%)',
        boxShadow: '1px 1px 5px rgba(69, 103, 27, 0.53)',
    },

}));



const titles = {
    "/goals": "GOALS/ Template",
    "/quizzes": " Quizzes",
    "/analytics": "Analytics",
    "/students": "Students",
    "/classes": "Classes",
    "/teacher": "Teacher",
    "/subscription": "Subscription",
    "/content": "Content Management",
    "/template-quiz": "QUIZZES / Quiz Templates",
    "/publish-quiz": "QUIZZES / Publish Quiz",
    "/create-quiz": "QUIZZES / Create Quiz",
    "/update-quiz": "QUIZZES / Update Quiz",
}

const Header = () => {

    const [title, setTitle] = useState("")

    const classes = useStyles();
    const location = useLocation()

    useEffect(() => {
        const title = titles[location.pathname]
        if (title) setTitle(title)
    }, [location.pathname])

    return (
        <Grid xs={12}>
            <AppBar position="static" className={classes.AppBarStyles}>
                <Toolbar>
                    <Typography className={classes.typographyStyles}>{title}</Typography>
                    <Grid xs={1}>
                        <Link to="/template-quiz"><img src={DashBoardIcon} /> </Link>
                    </Grid>
                    <Grid xs={1}><Notifications></Notifications></Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
};
export default Header;