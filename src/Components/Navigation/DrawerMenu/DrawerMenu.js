import React from 'react';
import { IconButton,Drawer,Divider,List,ListItem,ListItemText} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import layoutStyles from '../../Styles/LayoutStyles';
import DrawerButton from './DrawerButton';


export default function DrawerMenu(props) {
    const classes = layoutStyles();
    const theme = useTheme();
    const [firstMenu,setFristMenu] = React.useState(
      [
        {name: 'firstBtn' , id:6},
        {name: 'secondBtn', id:7},
        {name: 'thirdBtn' , id:8},
        {name: 'fourthBtn', id:9}
      ]
    );
    const [secondMenu, setSecondMenu] = React.useState(
      [
        {name: 'fifthBtn'  , id:10},
        {name: 'sixthBtn'  , id:11},
        {name: 'seventhBtn', id:12},
      ]
    )

    const handleClick = id => props.handleClick(id);

    const handleDrawerClose = () => props.handleDrawerClose();

    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={props.open}
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
          {firstMenu.map(el=> <DrawerButton key={el.id} name={el.name} classes={classes} handleClick={handleClick} id={el.id}/>)}
        </List>
        <Divider />
        <List>
        {secondMenu.map(el=> <DrawerButton key={el.id} name={el.name} classes={classes} handleClick={handleClick} id={el.id}/>)}
        </List>
      </Drawer>
    )
}
