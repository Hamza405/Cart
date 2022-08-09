import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui_slices';

const CartButton = ( props ) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector( state => state.cart.totalQuantity );
  const toggleCarthandler = () => {
    dispatch( uiActions.toggleShowCart() );
  };
  return (
    <button className={ classes.button } onClick={ toggleCarthandler }>
      <span>My Cart</span>
      <span className={ classes.badge }>{ totalQuantity }</span>
    </button>
  );
};

export default CartButton;
