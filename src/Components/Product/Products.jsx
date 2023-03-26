import React from 'react';
import './Produccts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
  const { img, seller, ratings, price, name } = props.product;
  const handelAddToProduct = props.handelProduct
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className='product-name'>{name}</h5>
        <p>Price:${price}</p>
        <p>Manufacture:{seller}</p>
        <p>Ratting:{ratings}</p>
      </div>
      <button className='add-to-cart' onClick={()=>handelAddToProduct(props.Products)}>
        
        Add To Cart
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Products;