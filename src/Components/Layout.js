import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import SignIn from './SignIn';
import SignUp from './SignUp';

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
    textTransform: 'uppercase'
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
    flexGrow: 1,
    padding: theme.spacing(3),
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
    textAlign: 'center'
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


export default function PersistentDrawerRight() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mainContent, setMainContent] = React.useState('FOOTBALL WORLD');


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = e => {
    setMainContent(e.target.innerText);
    setOpen(false);
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
          <Typography  variant="h3" className={classes.title}>
            <span className={classes.logo} onClick={handleClick}>football world</span>
          </Typography>
          
          <List className={classes.appBarBtns}>
            {['Sign in', 'Sign up', 'Cart'].map((el) => (
              <ListItem onClick={handleClick} button key={el}>
                <ListItemText className={classes.listItemText} primary={el} />
              </ListItem>
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
        <Typography paragraph>

          {mainContent === 'FOOTBALL WORLD' ? 'Main Content' : ''}
          {mainContent === 'Sign in' ? <SignIn /> : ''}
          {mainContent === 'Sign up' ? <SignUp /> : ''}
          {mainContent === 'Cart' ? 'Cart Content' : ''}
          {mainContent === 'Boots' ? 'Boots Content' : ''}
          {mainContent === 'Clothes' ? 'Clothes Content' : ''}
          {mainContent === 'Balls' ? 'Balls Content' : ''}
          {mainContent === 'Equipment' ? 'Equipment Content' : ''}
          {mainContent === 'Account' ? 'Account Content' : ''}
          {mainContent === 'About Us' ? 'About Us Content' : ''}
          {mainContent === 'Contact' ? 'Contact Content' : ''}

        </Typography>
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
