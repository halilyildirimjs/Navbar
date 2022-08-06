import * as React from 'react'
import { Typography, Popover, Box } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import NotificationsIcon from '../../Assets/Image/Dashboard/notifications.png';
import { makeStyles, Grid } from '@material-ui/core';
import { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    PopOver: {
        marginTop: "2vh",
        width: "200vh",
        borderRadius: "5px"
    },
    root: {
        width: '100%',
        maxWidth: '36ch',
    },
    Avatar: {
        height: "3vh",
        width: "3vh"
    },
    inline: {
        display: 'inline',
    },
    notificationsText: {
        color: '#595959'
    },

});

const Notifications = () => {

    const classes = useStyles();

    return (<PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
            <Grid >
                <img src={NotificationsIcon} {...bindTrigger(popupState)} />
                <Popover className={classes.PopOver}
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Box p={2} >
                        <List className={classes.root}>
                            <ListItem>
                                <Fragment>

                                    <Typography
                                        component="span"
                                        className={classes.notificationsText}
                                    > Notifications </Typography>
                                </Fragment>
                            </ListItem>
                            <Divider component="li" />
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar >
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.Avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    secondary={
                                        <Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Ali Connors
                                            </Typography>
                                            {" — I'll be in your neighborhood doing errands this…"}
                                        </Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" className={classes.Avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    secondary={
                                        <Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                to Scott, Alex, Jennifer
                                            </Typography>
                                            {" — Wish I could come, but I'm out of town this…"}
                                        </Fragment>
                                    }
                                />
                            </ListItem>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" className={classes.Avatar} />
                                </ListItemAvatar>
                                <ListItemText
                                    secondary={
                                        <Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textPrimary"
                                            >
                                                Sandra Adams
                                            </Typography>
                                            {' — Do you have Paris recommendations? Have you ever…'}
                                        </Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Popover>
            </Grid>
        )}
    </PopupState>)
}

export default Notifications