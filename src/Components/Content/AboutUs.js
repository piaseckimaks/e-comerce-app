import React from 'react';
import {Paper} from '@material-ui/core';

export default function AboutUs() {
    return (
        <div style={{position:'relative',top:'20%',width:'60vw',margin:'0 auto'}}>
            <Paper variant="outlined" elevation={3} square>
                <h1>About Us:</h1> 
                Mauris tempor iaculis quam, id suscipit ante pellentesque sit amet. Nam vulputate finibus lacus id gravida. Integer massa felis, interdum ac viverra ac, scelerisque nec dui. Morbi sit amet tempus nisl. Nunc est ligula, molestie sed ipsum et, tristique vehicula nisl. Quisque ut dui orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sed tempor ante. Fusce ornare bibendum dignissim. Vivamus porta gravida lacus, sit amet egestas odio blandit ut. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tempus sem eu est pharetra euismod.
                Nulla ligula felis, iaculis sit amet lectus et, eleifend rhoncus lacus.
                Suspendisse vitae lorem sit amet enim hendrerit laoreet in ut elit.
                <h1>Contact:</h1>
                </Paper>
        </div>
    )
}
