import React,{useEffect,useState} from 'react';
import { Box, Card, CardActionArea, CardMedia, Typography, CardContent, Divider} from '@material-ui/core';
import mainStyles from '../../Styles/MainStyles';
import DataFetch from '../../../util/DataFetch';


const cardContent = [{"id":1,"brand":"Nike","model":"Phantom GT Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2f26e888-8d5b-4cb3-98cd-ea4dc121a77b/phantom-gt-elite-fg-football-boot-2V9lb6.jpg","description":"New model from Nike which is perfect combination of lightweight and comfortable boot"},{"id":2,"brand":"Nike","model":"Mercurial Superfly 7 Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c3e1bda0-a667-4a04-bbab-aeb27c52a09b/mercurial-superfly-7-elite-mbappe-rosa-fg-football-boot-m2CTrg.jpg","description":"The best and lightest speed boots on market."},{"id":3,"brand":"Nike","model":"Mercurial Vapor 13 Elite","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/cfcc19ee-f5cb-4d81-81f0-e7ae6c8cdb95/mercurial-vapor-13-elite-ag-pro-voetbalschoen-jc5LBD.jpg","description":"The best and lightest speed boots on market in classic lower cut."},{"id":4,"brand":"Nike","model":"Tiempo Legend 8 Pro","size":40,"price":200,"quantity":15,"image_url":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/73bef18b-7e4f-4973-844f-c8e843373379/tiempo-legend-8-pro-sg-voetbalschoen-N4WV8p.jpg","description":"Clasic leathar boots. The most comfortable on market."}];

export default function MainContent(props) {
    const classes = mainStyles();
    const [firstBox,setFirstBox] = useState([]); 
    const [secondBox,setSecondBox] = useState([]); 
    const [thirdBox,setThirdBox] = useState([]); 
    const [fourthBox,setFourthBox] = useState([]); 

    useEffect(() => {
        DataFetch.getProducts('Boots').then(res=> setFirstBox(res));
        DataFetch.getProducts('Clothes').then(res=> setSecondBox(res));
        DataFetch.getProducts('Balls').then(res=> setThirdBox(res));
        DataFetch.getProducts('Equipment').then(res=> setFourthBox(res));

        console.log(firstBox);
    }, [])

    const handleClick = () =>
    {
        props.handleClickProduct('ProductPage');
    }

    return (
        <div className={classes.container}>
            <Box className={classes.mainPic}>
            </Box>
            <Divider />
            <Typography className={classes.productTitle}>
                Best shoes
            </Typography>
            <Divider />
            <Box className={classes.flex}>
                {firstBox.map(el=>{
                    return <Card  key={el.id} className={classes.root}>
                                <CardActionArea onClick={handleClick} className={classes.content}>
                                    <CardMedia
                                        component="img"
                                        alt={el.model}
                                        height="210"
                                        image={el.image_url}
                                        title={`${el.brand} ${el.model}`}
                                    />
                                    </CardActionArea>
                                    <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
                                        {`${el.brand} ${el.model}`}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                                        {el.description}
                                    </Typography>
                                    </CardContent>
                                
                                <Typography className={classes.price}>
                                    {el.price}$
                                </Typography>
                            </Card>
                })}
            </Box>
            <Divider />
            <Typography className={classes.productTitle}>
                Best clothes
            </Typography>
            <Divider />
            <Box className={classes.flex}>
                {secondBox.map(el=>{
                    return <Card key={el.id} className={classes.root}>
                                  <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image={el.image_url}
                                    title={`${el.brand} ${el.model}`}
                                    />
                                    <CardContent className={classes.cardContent}>
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
            <Typography className={classes.productTitle}>
                Best balls
            </Typography>
            <Divider />
            <Box className={classes.flex}>
                {thirdBox.map(el=>{
                    return <Card key={el.id} className={classes.root}>
                                  <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="200"
                                    image={el.image_url}
                                    title={`${el.brand} ${el.model}`}
                                    />
                                    <CardContent className={classes.cardContent}>
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
            <Typography className={classes.productTitle}>
                Best equipment
            </Typography>
            <Divider />
            <Box className={classes.flex}>
                {fourthBox.map(el=>{
                    return <Card key={el.id} className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="200"
                      image={el.image_url}
                      title={`${el.brand} ${el.model}`}
                      />
                      <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2" className={classes.header}>
                          {`${el.brand} ${el.model}`}
                      </Typography>
                      <Typography variant="body2" component="p" className={classes.description}>
                          {el.description}
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                  <Typography className={classes.price} >
                  {el.price}$
                  </Typography>
              </Card>
                })}
            </Box>
        </div>
    )
}
