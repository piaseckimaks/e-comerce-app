import React from 'react';
import clsx from 'clsx';
import {Switch, Button, AppBar,IconButton,Toolbar,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import layoutStyles from '../../Styles/LayoutStyles';
import AccountBtn from './AccountBtn';
import CartBtn from './CartBtn';

export default function NavBar(props) {
    const classes = layoutStyles();

    const handleDrawerOpen = () => props.handleDrawerOpen();

    const handleClickTitle = e => props.handleClickButtons(e.target.id);

    const handleClickButtons = id => props.handleClickButtons(id);

    return (
        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <Typography  variant="h2" className={classes.title}>
            <span className={classes.logo} id="1" onClick={handleClickTitle}>{props.title}</span>
          </Typography>
          
          <AccountBtn id={2} handleClickButtons={handleClickButtons}/>

          <CartBtn id={4} handleClickButtons={handleClickButtons}/>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(props.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    )
}
