import './DashboardNavbar.css'
import React, { Fragment, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Image/Navbar/logo.png'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Button, Typography } from '@material-ui/core'
import { NavLink, Redirect } from 'react-router-dom'
import { Auth } from 'aws-amplify'
import '@szhsin/react-menu/dist/index.css'
import { useTranslation } from 'react-i18next'
import { useMenuState } from '@szhsin/react-menu'
import { DashboardData } from './DashboardData';
import DashboardSubMenu from './DashboardSubMenu';

const useStyles = makeStyles((theme) => ({
    bt: {
        color: "black",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif!important",
        fontStyle: "normal!important",
        fontSize: "18px!important",
        padding: "10px 15px",
        alignItems: 'flex-end',
        '&:hover': {
            color: "gray",
        },
    },

    nested: {
        paddingLeft: theme.spacing(10),
        height: "33px",
    },
    listItemText: {
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif!important",
        fontStyle: "normal!important",
        fontSize: "18px!important",
        color: "black"
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lingushText: {
        display: 'flex',
        paddingLeft: '2vh',
        color: 'black',
        fontFamily: 'Rubik',
        fontStyle: 'normal',

    }

}));

const DashboardNavbar = (props) => {
    const { t, i18n } = useTranslation();
    const [loggedout, setLoggedout] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const [a, seta] = useState(false);
    const classes = useStyles();

    const { openMenu, closeMenu, toggleMenu, ...menuProps } = useMenuState();
    const { auth } = props;
    const handleMenuClick = e => {
        setOpen(<NavLink exact className={classes.subbt} to="/create-quiz">Create</NavLink>);
    };

    const handleClick = () => {
        seta(!a);
    };
    const onSubmitHandler = async (event) => {
        try {
            await Auth.signOut();
            setLoggedout(true);
            auth.setAuthStatus(false);
            auth.setUser(null);
            console.log("logged out");
            console.log(loggedout)
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
    const displaySubMenu = () => {

        <Grid container item >
            <NavLink to="/" >temp</NavLink>
            <NavLink to="/" >zımıbr</NavLink>

        </Grid>

    }
    const logout = () => {
        localStorage.clear();
        // you can also like localStorage.removeItem('Token');
        window.location.href = "/log_in";
    }
    if (!Auth.user) {
        return (
            // <Index/>
            <Redirect to={'/'} />
            // <App/>
        )
    }
    return (
        <Fragment>
            <Grid container item xs={3} className="navbar">
                <Grid container>
                    <Grid container item id="side-line" xs={1} />
                    <Grid item container xs={11}>
                        <Grid item className={classes.header} xs={12}>
                            <Grid className={classes.logo}  >
                                <img style={{ width: 64, height: 60 }} src={logo} alt="" />
                                <Typography className={classes.lingushText}>Lingush</Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}>
                                <NavLink exact className={classes.bt} to="/" >
                                    {Auth.user.username}
                                </NavLink>
                            </Grid>
                            <Grid item xs={3}></Grid>
                            <Grid item xs={4}>
                                <Button onClick={logout} >Log out</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            {DashboardData.map((item, index) => <DashboardSubMenu item={item} key={index} />)}
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

        </Fragment>
    )
}

export default DashboardNavbar
