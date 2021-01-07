import React from 'react';
import {TextField, Button} from '@material-ui/core';

export default function MyAddress() {
    return (
        <div>
            <div>
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="street"
                    label="Street"
                    id="street"
                    required
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    name="number"
                    label="House Number"
                    type="number"
                    id="number"
                    required
            />
            </div>
            <TextField
                variant="outlined"
                margin="normal"
                name="postcode"
                label="Post Code"
                id="postcode"
                required
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                name="city"
                label="City"
                id="city"
                required
                fullWidth
            />
            <TextField
                variant="outlined"
                margin="normal"
                name="country"
                label="Country"
                id="country"
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
