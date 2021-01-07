import React from 'react';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import {Switch, Button, Drawer, AppBar,Toolbar,CssBaseline,List,Typography,Divider,IconButton,ListItem,ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SignIn from './Content/SignIn';
import SignUp from './Content/SignUp';
import MainContent from './Content/MainContent';
import Cart from './Cart/Cart';
import ProductsContent from './Content/ProdutsContent';
import AccountContent from './Content/AccountContent/AccountContent';
import Checkout from './Checkout/Checkout';
import layoutStyles from './Styles/LayoutStyles';




export default function Layout(props) {
  const classes = layoutStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logedIn, setLogedIn] = React.useState(false);

  const handleChange = () =>
  {
    if(logedIn) setLogedIn(false);
    else setLogedIn(true);
  }


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = e => {
    props.handleContent(e.target.innerText);
    setOpen(false);
  };

  const handleClickWithoutFetch = e =>
  {
    props.contentWithoutFetch(e.target.innerText);
  };

  const handleClickCart = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography  variant="h2" className={classes.title}>
            <span className={classes.logo} onClick={handleClickWithoutFetch}>football world</span>
          </Typography>
          <Switch
            checked={logedIn}
            onChange={handleChange}
           
            name="checkedB"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
              {logedIn ? '' : (<Button 
                aria-controls="customized-menu" 
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClickWithoutFetch}
              >
                Sign in
              </Button>)}
              {logedIn ? '' : (<Button 
                aria-controls="customized-menu" 
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClickWithoutFetch}

              >
                Sign up
              </Button>)}
              <Button 
                    aria-controls="customized-menu" 
                    aria-haspopup="true"
                    variant="contained"
                    color="primary"
                    onClick={handleClickWithoutFetch}
                  >
                    Cart
              </Button>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

          {props.mainContent === 'FOOTBALL WORLD' ? <MainContent /> : ''}
          
          {props.mainContent === 'Already have an account? Sign in' || props.mainContent === 'SIGN IN' ? <SignIn handleClick={handleClick}/> : ''}
          {props.mainContent === `Don't have an account? Sign Up`|| props.mainContent === 'SIGN UP' ? <SignUp handleClick={handleClick}/> : ''}
          {props.mainContent === 'CART' ? <Cart handleClick={handleClick}/> : ''}
          {props.mainContent === 'Boots' ? <ProductsContent fetchResult={props.fetchResult}/> : ''}
          {props.mainContent === 'Clothes' ? <ProductsContent fetchResult={props.fetchResult}/> : ''}
          {props.mainContent === 'Balls' ? <ProductsContent fetchResult={props.fetchResult}/> : ''}
          {props.mainContent === 'Equipment' ? <ProductsContent fetchResult={props.fetchResult}/> : ''}
          {props.mainContent === 'Account' ? <AccountContent /> : ''}
          {props.mainContent === 'About Us' ? 'About Us Content' : ''}
          {props.mainContent === 'Contact' ? 'Contact Content' : ''}
          {props.mainContent === 'PROCEED' ? <Checkout /> : ''}

      </main>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Boots', 'Clothes', 'Balls', 'Equipment'].map((text, index) => (
            <ListItem onClick={handleClick} button key={text}>
              <ListItemText className={classes.listItemText} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Account', 'About Us', 'Contact'].map((text, index) => (
            <ListItem onClick={handleClick} button key={text}>
              <ListItemText className={classes.listItemText} primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
