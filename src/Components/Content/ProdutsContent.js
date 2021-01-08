import React from 'react';
import {Box, Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import ContentFilter from './ContentFilter';
//import fetchData from '../../util/DataFetch';
import productsStyles from '../Styles/ProductsStyles';


export default function ProductsContent(props) {
    const classes = productsStyles();
    const flex = {display: 'flex'};

    return (
        <div style={flex}>
            <ContentFilter />
            <Box className={classes.flex}>
            {props.fetchResult.map(el=>{
                return <Card key={el.id} className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={el.image_url}
                                title={`${el.brand} ${el.model}`}
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
                                    {`${el.brand} ${el.model}`}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                    {el.description}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <Typography className={classes.price}>
                            {el.price}$
                            </Typography>
                        </Card>
            })}
        </Box>
        </div>
    )
}
