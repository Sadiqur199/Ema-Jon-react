import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = ({cart}) => {
  // const {cart} = props;
  console.log(cart)
  // let total = 0;

  // for (const product of cart){
  //   // console.log(product.price)
  //   total = total + product.price;
  // }

  return (
    <div className='cart'>
      <h5>Add To Cart </h5>
      <p>Selected Item : {cart.length}</p>
      <p>Total Price : </p>
      <p>Total Shipping Cost : </p>
      <p>Tax : </p>
      <h6>Grand Total : </h6>
      <div className='button-flex'>
        <button className='frist-btn'>
          Clear Data
          <FontAwesomeIcon icon={faRecycle} />
        </button>
        <button className='second-btn'>
          Review Order
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Cart;