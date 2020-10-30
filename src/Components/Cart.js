import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import Box from '@material-ui/core/Box';
import ClearIcon from '@material-ui/icons/Clear';

const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

export default function Cart(props) {
    const handleClose = () => props.handleClose();
    const flex = {
        display: 'flex',
        aligItem: 'center',
        justifyContent: 'space-between'
    };

    return (
        <StyledMenu
            id="customized-menu"
            anchorEl={props.anchorEl}
            keepMounted
            open={Boolean(props.anchorEl)}
            onClose={handleClose}
        >
            {
                ['nike phantom','adidas f50','umbro velocita'].map(el=>{
                    return  <div style={flex}>
                                <ListItem>
                                    <ListItemText primary={el} />
                                </ListItem>
                                <ClearIcon button/>
                            </div>
                })
            }
        </StyledMenu>
    );
}
