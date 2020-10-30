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
        maxHeight: 40,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    }
});

const cardContent = [];

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
