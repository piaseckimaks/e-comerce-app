import React from 'react';
import {makeStyles, Box, Card, CardActionArea, CardMedia, Typography, Button, CardContent, CardActions, Divider} from '@material-ui/core';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5vh 0',
        padding: '2vh 10vh'
    },
    root: {
        maxWidth: 345,
      },
    img: {
        width: '100%',
        height: '100%'
    },
    mainPic: {
        height: '75vh',
        margin: '6vh 0'
    },
    title: {
        fontSize: '7.5vh',
        textAlign: 'center',
        margin: '3vh 0',
        fontVariant: 'small-caps',
        textTransform: 'uppercase',
    },
    price: {
        fontSize: '3vh',
        textAlign: 'center',
        margin: '0 auto',
        height: 35
    },
    header: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    description: {
        minHeight: 40,
        maxHeight: 40
    }
});

const cardContent = [
    {
        "id": 1,
        "brand": "Nike",
        "model": "Phantom GT Elite",
        "size": 40,
        "price": 220,
        "quantity": 15,
        "image_url": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f26e888-8d5b-4cb3-98cd-ea4dc121a77b/phantom-gt-elite-fg-football-boot-2V9lb6.jpg",
        "description": "New model from Nike which is perfect combination of lightweight and comfortable boot"
    }, 
    { 
        "id": 2,
        "brand": "Nike", 
        "model": "Mercurial Superfly 7 Elite", 
        "size": 40, "price": 250, 
        "quantity": 15, 
        "image_url": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c3e1bda0-a667-4a04-bbab-aeb27c52a09b/mercurial-superfly-7-elite-mbappe-rosa-fg-football-boot-m2CTrg.jpg",
         "description": "The best and lightest speed boots on market." 
    }, 
    { 
        "id": 3, 
        "brand": "Nike", 
        "model": "Mercurial Vapor 13 Elite", 
        "size": 40, "price": 210, 
        "quantity": 15, 
        "image_url": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cfcc19ee-f5cb-4d81-81f0-e7ae6c8cdb95/mercurial-vapor-13-elite-ag-pro-voetbalschoen-jc5LBD.jpg", 
        "description": "The best and lightest speed boots on market in classic lower cut." 
    }, 
    { 
        "id": 4, 
        "brand": "Nike", 
        "model": 
        "Tiempo Legend 8 Pro", 
        "size": 40, 
        "price": 180, 
        "quantity": 15, 
        "image_url": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/73bef18b-7e4f-4973-844f-c8e843373379/tiempo-legend-8-pro-sg-voetbalschoen-N4WV8p.jpg", 
        "description": "Clasic leathar boots. The most comfortable on market." 
    }
];

export default function MainContent() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.mainPic}>
                <img className={classes.img} alt="main=pic" src="https://thumblr.uniid.it/banner/8783/e00cbba13cc8.jpg"></img>
            </Box>
            <Divider />
            <Typography className={classes.title}>
                Best shoes
            </Typography>
            <Box className={classes.flex}>
                {cardContent.map(el=>{
                    return <Card key={el.id} className={classes.root}>
                                  <CardActionArea className={classes.content}>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="210"
                                    image={el.image_url}
                                    title={`${el.brand} ${el.model}`}
                                    />
                                    <CardContent >
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
            <Divider />
            <Typography className={classes.title}>
                Best clothes
            </Typography>
            <Box className={classes.flex}>
                {cardContent.map(el=>{
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
            <Divider />
            <Typography className={classes.title}>
                Best balls
            </Typography>
            <Box className={classes.flex}>
                {cardContent.map(el=>{
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
            <Divider />
            <Typography className={classes.title}>
                Best equipment
            </Typography>
            <Box className={classes.flex}>
                {cardContent.map(el=>{
                    return <div>
                            <Card key={el.id} className={classes.root}>
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
                        </div>
                })}
            </Box>
        </div>
    )
}
