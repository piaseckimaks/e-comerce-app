import React from 'react';
import {ListItem, ListItemText} from '@material-ui/core';

export default function DrawerButton(props) {
    const handleClick = () => props.handleClick(props.id);

    return (
        <ListItem onClick={handleClick} button >
            <ListItemText className={props.classes.listItemText} primary={props.name} />
        </ListItem>
    )
}
