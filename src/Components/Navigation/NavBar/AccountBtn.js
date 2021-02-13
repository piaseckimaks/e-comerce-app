import React from 'react';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {IconButton} from '@material-ui/core';


export default function AccountBtn(props) {
    const handleClickButtons = () => props.handleClickButtons(props.id);

    return (
        <IconButton
            aria-controls="customized-menu" 
            aria-haspopup="true"
            onClick={handleClickButtons}
            style={{color: 'white',fontWeight: 300}}
        >
              <AccountBoxIcon />
        </IconButton>
    )
}
