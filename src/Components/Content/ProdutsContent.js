import React from 'react';
import {makeStyles, Box, Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import ContentFilter from './ContentFilter';

const useStyles = makeStyles({
    flex: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '5vh 0',
        padding: '2vh 10vh'
    },
    root: {
        maxWidth: 345,
        margin: '2vh 2vw'
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

const cardContent = [{"id":1,"brand":"Nike","model":"Phantom GT Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f26e888-8d5b-4cb3-98cd-ea4dc121a77b/phantom-gt-elite-fg-football-boot-2V9lb6.jpg","description":"New model from Nike which is perfect combination of lightweight and comfortable boot"},{"id":2,"brand":"Nike","model":"Mercurial Superfly 7 Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c3e1bda0-a667-4a04-bbab-aeb27c52a09b/mercurial-superfly-7-elite-mbappe-rosa-fg-football-boot-m2CTrg.jpg","description":"The best and lightest speed boots on market."},{"id":3,"brand":"Nike","model":"Mercurial Vapor 13 Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cfcc19ee-f5cb-4d81-81f0-e7ae6c8cdb95/mercurial-vapor-13-elite-ag-pro-voetbalschoen-jc5LBD.jpg","description":"The best and lightest speed boots on market in classic lower cut."},{"id":4,"brand":"Nike","model":"Tiempo Legend 8 Pro","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/73bef18b-7e4f-4973-844f-c8e843373379/tiempo-legend-8-pro-sg-voetbalschoen-N4WV8p.jpg","description":"Clasic leathar boots. The most comfortable on market."},{"id":5,"brand":"Nike","model":"Phantom Venom Academy","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c1b6a564-a475-46f3-acab-8076ecfca48c/phantom-venom-academy-fg-football-boot-cMBsK7.jpg","description":"Wide shoes perfect for strikers."},{"id":6,"brand":"Nike","model":"Phantom VSN Academy","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ds6j65fpaa1gusejdcbr/phantomvsn-academy-dynamic-fit-sg-pro-anti-clog-traction-football-boot-kVb3x8.jpg","description":"Best shoes for team engine player."}];

export default function ProductsContent(props) {
    const classes = useStyles();
    const flex = {display: 'flex'};


    return (
        <div style={flex}>
            <ContentFilter />
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
