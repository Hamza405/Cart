import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { sendCartData } from './store/cart_slices';
import Notification from './components/UI/Notification';

let isInitial = true;

function App () {
  const showCart = useSelector( state => state.ui.cartShow );
  const cart = useSelector( state => state.cart );
  const notificationState = useSelector( state => state.ui.notification );
  const dispatch = useDispatch();

  useEffect( () => {
    if ( isInitial )
    {
      isInitial = false;
      return;
    }

    dispatch( sendCartData( cart ) );
  }, [ cart, dispatch ] );

  return (
    <>
      { notificationState && <Notification status={ notificationState.status } title={ notificationState.title } message={ notificationState.message } /> }
      <Layout>
        { showCart && <Cart /> }
        <Products />
      </Layout></>

  );
}

export default App;
