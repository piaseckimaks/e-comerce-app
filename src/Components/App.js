import React from 'react';
import DataFetch from '../util/DataFetch'
import clsx from 'clsx';
import {CssBaseline} from '@material-ui/core';
import SignIn from './Content/SignIn';
import SignUp from './Content/SignUp';
import MainContent from './Content/MainContent/MainContent';
import Cart from './Cart/Cart';
import ProductsContent from './Content/ProdutsContent';
import AccountContent from './Content/AccountContent/AccountContent';
import Checkout from './Checkout/Checkout';
import layoutStyles from '../Components/Styles/LayoutStyles';
import AboutUs from './Content/AboutUs';
import DrawerMenu from './Navigation/DrawerMenu/DrawerMenu';
import NavBar from './Navigation/NavBar/NavBar';

function App() {
  const classes = layoutStyles();
  const [main, setMain] = React.useState(1);
  const handleClickProductCard = () => console.log('handleClickProductCard');
  const [content,setContent] = React.useState(<MainContent handleClickProduct={handleClickProductCard}/>);
  const [fetchResult, setFetchResult] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('shop name');

  React.useEffect(()=>
  {
    if(main == 1) setContent(<MainContent handleClickProduct={handleClickProductCard}/>);
    if(main == 2) setContent(<SignIn handleClick={handleClickButtons}/>);
    //if(main == 3) setContent(<SignUp handleClick={handleClickButtons}/>);
    if(main == 4) setContent(<Cart handleClick={handleClickButtons}/>);
    if(main == 5 || main === 6 || main === 7 || main === 8) setContent(<ProductsContent fetchResult={fetchResult}/>);;
    if(main === 10) setContent(<AccountContent />);
    if(main === 11) setContent(<AboutUs />);
  },[main]
  )


  //Handling navigation buttons
  const handleClickButtons = (id) => {setMain(id); console.log(id); setOpen(false)};

  //DrawerMenu handling
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };





  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar 
        handleDrawerOpen={handleDrawerOpen}
        handleClickButtons={handleClickButtons}
        title={title}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {content}
      </main>
        <DrawerMenu 
          handleDrawerClose={handleDrawerClose}
          handleClick={handleClickButtons}
          open={open}
        />
    </div>
  );
}

export default App;
