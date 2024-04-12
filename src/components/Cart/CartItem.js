import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartSliceActions } from '../../store/cart';


const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  //function to remove item from cart
  function removeItemHandler() {
    dispatch(cartSliceActions.removeItemFromCart(id));
  }

  //function to add item to the cart
  function addItemHandler() {
    dispatch(cartSliceActions.addItemToCart(props.item))
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
