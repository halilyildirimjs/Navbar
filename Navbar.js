import React, { Fragment, useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Image/Navbar/logo.png'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, Container, IconButton, MenuItem, Menu } from '@material-ui/core';
import { Link, NavLink } from 'react-router-dom';
import MoreIcon from '@material-ui/icons/MoreVert';
import LanguageIcon from '@material-ui/icons/Language';
import Flags from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) =>({
    sectionDesktop:{
        display:"none",
        backgroundColor:"rgb(255, 185, 249)",
        position:"fixed",
        zIndex:"1",
        top:"0px",
        justify:"center",
         right:"0",
         left:"0",
        


        [theme.breakpoints.up("md")]:{
            display:"flex",
        },
    },
    sectionMobile:{
        display:"flex",
        [theme.breakpoints.up("md")]:{
            display:"none",
        },
        position:"absolute",
    },
    bt:{
        color: "black",    
        textDecoration:"none",
        fontFamily:"'Poppins', sans-serif!important",
        fontStyle: "normal!important",
        fontWeight: "600!important",
        fontSize: "18px!important",
        padding:"10px 15px",
        
        
        '&:hover':{
            borderBottom:"2px solid purple",
            transition: "0.05s",
        }


    },
    nav:{
        backgroundColor:"rgb(255, 185, 249)",
        position:"fixed",
        top:"0",
        left:"0%",
        margin:"auto",
        
    
        
    }
}));



function Navbar() {
    const { t, i18n } = useTranslation();
    const classes = useStyles();

    //Handle Mobile Menu
    const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
    
    //Handle Language Menu
    const [languageMenuAnchorEl, setLanguageMenuSnchorEl] = useState(null);
    const isLanguageMenuOpen = Boolean(languageMenuAnchorEl);

    const openMobileMEnu = (e) => {
        setMobileMenuAnchorEl(e.currentTarget);
    }
    const closeMobileMenu = () => {
        setMobileMenuAnchorEl(null);
    }

    const openLanguageMenu = (e) =>{
        setLanguageMenuSnchorEl(e.currentTarget);
    }
    const closeLanguageMenu = () => {
        setLanguageMenuSnchorEl(null);
    }


    //To Change Language
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
        closeLanguageMenu();
        closeMobileMenu();
    }
    
    const mobileMenu = (
        <Menu anchorEl={mobileMenuAnchorEl} id="monile-menu" keepMounted open={isMobileMenuOpen}>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/maingamepage">{t('Login.2')}</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/log_in">{t('Login.1')}</MenuItem>
            <MenuItem component={Link} onClick={closeMobileMenu} to="/About_Us">{t('Aboutus.1')}</MenuItem>
            <MenuItem onClick={openLanguageMenu}><LanguageIcon/></MenuItem>
        </Menu>
    )

    const LanguageMenu = (
        <Menu anchorEl={languageMenuAnchorEl} id="language-menu" keepMounted open={isLanguageMenuOpen}>
            <MenuItem onClick={()=>handleClick('en')}><Flags.US title="United States" style={{width:"40px"}}/></MenuItem>
            <MenuItem onClick={()=>handleClick('tr')}><Flags.TR title="Turkey" style={{width:"40px"}}/></MenuItem>
        </Menu>
    )
    return (
        
        <Fragment>   
            <Grid container direction="row" justify="center" alignItems="center" spacing={0} style={{position:"absolute"}} className={classes.nav} >
            <Grid item xs={12}  container spacing={3} justify="center" alignItems="center" className={classes.sectionDesktop}>
            <Grid item xs={6} md={6}>
                   <Button component={Link} to="/"  id="lin-logo">         
                    <div className="lingush-logo">
                    <img style={{width:"64px"},{height:"60px"}} src={logo} alt=""/>
                    <div className="text">Lingush</div>
                </div>
                </Button>
            </Grid>  
                <Grid item>
                    <NavLink exact className={classes.bt} activeClassName="active_class" to="/">
                    {t('Home.1')}     
                    </NavLink>
                </Grid>
                <Grid>
                <NavLink exact className={classes.bt} activeClassName="active_class" to="/maingamepage">                   
                    {t('Login.4')}        
                    </NavLink> 
                </Grid>
                <Grid item>
                    <NavLink exact className={classes.bt} activeClassName="active_class" to="/log_in">
                    {t('Login.1')}        
                    </NavLink>
                </Grid>
                <Grid item>
                    <NavLink exact className={classes.bt} activeClassName="active_class" to="/about_us">
                    {t('Aboutus.1')}       
                    </NavLink>
                </Grid>
                <Grid item>
                    <IconButton onClick={openLanguageMenu}>
                    <LanguageIcon/>      
                    </IconButton>
                </Grid>
            </Grid>
            <IconButton className={classes.sectionMobile} color="inherit" onClick={openMobileMEnu}>
                <MoreIcon />
            </IconButton>
            </Grid>
            { mobileMenu }
            { LanguageMenu }
        </Fragment>   
    )
}

export default Navbar 
