import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {IconButton} from '@material-ui/core';


export default function CartBtn(props) {
    const handleClickButtons = () => props.handleClickButtons(props.id);

    return (
        <IconButton
            aria-controls="customized-menu" 
            aria-haspopup="true"
            onClick={handleClickButtons}
            style={{color: 'white',fontWeight: 300}}
        >
            <ShoppingCartIcon />
        </IconButton>
    )
}
