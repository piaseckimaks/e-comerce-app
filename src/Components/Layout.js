import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SignIn from './Content/SignIn';
import SignUp from './Content/SignUp';
import MainContent from './Content/MainContent';
import Cart from './Cart/Cart';
import ProductsContent from './Content/ProdutsContent';
import Checkout from './Checkout/Checkout';


const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
    fontVariant: 'small-caps',
    textTransform: 'uppercase',
    fontFamily: `'Fredoka One', cursive`
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    padding: theme.spacing(1),
    width: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  listItemText: {
    textAlign: 'center',
  },
  logo: {
    cursor: 'pointer',
  },
  appBarBtns: {
    display: 'flex',
    justifyContent: 'center',
    width: '15vw',
  }
}));


export default function Layout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  

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
            <span className={classes.logo} onClick={handleClick}>football world</span>
          </Typography>
          
          <List className={classes.appBarBtns}>
            {['Sign in', 'Sign up','Cart'].map((el, index) => (
              <Button 
                aria-controls="customized-menu" 
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                key={index}
              >
                {el}
              </Button>
            ))}
          </List>


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
          {props.mainContent === 'Account' ? 'Account Content' : ''}
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
