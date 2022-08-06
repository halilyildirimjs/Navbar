import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bt: {
    color: "black",
    textDecoration: "none",
    fontFamily: "'Poppins', sans-serif!important",
    fontStyle: "normal!important",
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

}));

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 60px;
  padding-left: 7rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 18px;
`;

const DashboardSubMenu = ({ item }) => {
  const classes = useStyles();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <Grid container>
          <Grid item xs={3} className={classes.icon}>{item.icon}</Grid>
          <Grid item xs={9}>
            <NavLink exact to={item.path} className={classes.bt} >
              <SidebarLabel>{item.title}</SidebarLabel>
            </NavLink>
          </Grid>
        </Grid>
        <Grid>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
              ? item.iconClosed
              : null}
        </Grid>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} >
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default DashboardSubMenu;
