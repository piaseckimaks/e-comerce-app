import React from 'react';
import clsx from 'clsx';
import {Switch, Button, AppBar,IconButton,Toolbar,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import layoutStyles from '../Styles/LayoutStyles';

export default function NavBar(props) {
    const classes = layoutStyles();

    const handleDrawerOpen = () => props.handleDrawerOpen();

    const handleClickTitle = e => props.handleClickButtons(e.target.id);

    const handleClickButtons = e => props.handleClickButtons(e.target.parentElement.parentElement.id);

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
            <IconButton
              aria-controls="customized-menu" 
              aria-haspopup="true"
              id={2}
              onClick={handleClickButtons}
              style={{color: 'white',fontWeight: 300}}
            >
              <AccountBoxIcon />
            </IconButton>

            <IconButton
              aria-controls="customized-menu" 
              aria-haspopup="true"
              id={4}
              onClick={handleClickButtons}
              style={{color: 'white',fontWeight: 300}}
            >
              <ShoppingCartIcon />
            </IconButton>



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
