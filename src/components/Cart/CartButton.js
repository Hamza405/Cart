import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui_slices';

const CartButton = ( props ) => {
  const dispatch = useDispatch();
  const toggleCarthandler = () => {
    dispatch( uiActions.toggleShowCart() );
  };
  return (
    <button className={ classes.button } onClick={ toggleCarthandler }>
      <span>My Cart</span>
      <span className={ classes.badge }>1</span>
    </button>
  );
};

export default CartButton;
