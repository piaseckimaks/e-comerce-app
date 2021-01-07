import React from 'react';
import {TextField, Button} from '@material-ui/core';

export default function MyDetails() {
    return (
        <div>
            <TextField
                variant="outlined"
                margin="normal"
                name="firstName"
                label="First Name"
                type="password"
                id="password"
                required
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                name="lastName"
                label="Last Name"
                type="lastName"
                id="lastName"
                required
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                name="email"
                label="Email Address"
                type="email"
                id="email"
                required
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                name="phone"
                label="Phone Number"
                type="phone"
                id="phone"
                required
                fullWidth
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //className={classes.submit}
            >
            Save
            </Button>
        </div>
    )
}
