import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { UiSliceActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const quantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  function toggleCartHandler() {
    dispatch(UiSliceActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
