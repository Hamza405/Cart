import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = ( props ) => {
  const items = useSelector( state => state.cart.items );
  const cartItems = items.map( i => {
    return <CartItem
      key={ i.id }
      item={ { id: i.id, title: i.title, quantity: i.quantity, total: i.totalPrice, price: i.price } }
    />;
  } );
  return (
    <Card className={ classes.cart }>
      <h2>Your Shopping Cart</h2>
      <ul>
        { cartItems }
      </ul>
    </Card>
  );
};

export default Cart;
