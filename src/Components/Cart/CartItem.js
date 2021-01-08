import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '1vh 0'
  },
  details: {
    minWidth: '70%',
    alignItems: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cover: {
    width: 151
  },
}));

export default function CartItem(props) {
  const classes = useStyles();
  const [quantity, setQuantity] = React.useState(1);
  const [price, setPrice] = React.useState(props.price);

  const handleAddClick = () =>{
    setQuantity(quantity+1);
    setPrice(price+props.price);
    console.log(props.uniqueId);
    props.handleChangePriceAndQuantity(props.uniqueId,props.price,quantity,"add");
  }

  const handleRemoveClick = () =>{
    if(quantity>0)
    {
      setQuantity(quantity-1);
      setPrice(price-props.price);
      props.handleChangePriceAndQuantity(props.uniqueId,props.price,quantity,"substract");}
    }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          <Typography component="h5" variant="h5">
            <IconButton onClick={handleRemoveClick}>
              <RemoveIcon />
            </IconButton>
            {quantity}
            <IconButton onClick={handleAddClick}>
              <AddIcon  />
            </IconButton>
          </Typography>
          <Typography component="h5" variant="h5">
            {price}$
          </Typography>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.pic}
        title="Live from space album cover"
      />
    </Card>
  );
}
