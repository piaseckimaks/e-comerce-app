import { Divider, Button } from '@material-ui/core';
import React from 'react'
import CartItem from './CartItem';


const cartContent = [
  {
    id: 1,
    name: 'product name',
    quantity: 1,
    price: 200,
    pic: 'https://thumblr.uniid.it/product/187030/a2631110399b.jpg'
  },
  {
    id: 2,
    name: 'product name',
    quantity: 1,
    price: 200,
    pic: 'https://thumblr.uniid.it/product/187030/a2631110399b.jpg'
  },
  {
    id: 3,
    name: 'product name',
    quantity: 1,
    price: 200,
    pic: 'https://thumblr.uniid.it/product/187030/a2631110399b.jpg'
  },


]

export default function Cart() {
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cartElements, setCartElements] = React.useState(cartContent);

  React.useEffect(() => {
    let prices = 0;
    cartContent.forEach(el=>prices+=el.price);
    setTotalPrice(prices);
    setCartElements(cartContent);
  }, [])
  
  const handleChangePriceAndQuantity = (id,price,quantity) => {
    setTotalPrice(totalPrice + price);
    setCartElements(cartElements.map(el=>{
      if(el.id===id){
        el.price = price;
        el.quantity = quantity;
        return el;
      }else{
        return el;
      }
    }))
  }

  const style = {
    root: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '3vh',
    },
    list: {
      margin: '5vh 0',
      width: '65%',
      backgroundColor: '#3F51B5',
      padding: '2.5%',
      borderRadius: '1%',
    },
    title: {
      width: '100%',
      textAlign: 'center',
      color: 'white'
    },
    total: {
      float: 'right',
      color: 'white'
    }
  }

  return (
    <div style={style.root}>
      <div style={style.list}>
      <h2 style={style.title}>Your cart:</h2>
      
        {
          cartElements.map(el=>{
            return (
            <CartItem 
              key={el.id}
              uniqueId={el.id}
              name={el.name} 
              quantity={el.quantity} 
              price={el.price} 
              pic={el.pic}
              handleChangePriceAndQuantity={handleChangePriceAndQuantity}
            />)
          })
        }
        <Divider />
        <div style={style.total}>
        <span>Total:</span><span >{totalPrice}$</span>
        <br></br>
        <Button 
          aria-controls="customized-menu" 
          aria-haspopup="true"
          variant="contained"
          color="white"
        >
          Proceed
        </Button>
        </div>
      </div>
    </div>
  )
}
