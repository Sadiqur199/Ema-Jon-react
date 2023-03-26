import React from 'react';
import './Produccts.css'
const Products = (props) => {
  const { img, seller, ratings, price, name } = props.product;
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className='product-name'>{name}</h5>
        <p>Price:${price}</p>
        <p>Manufacture:{seller}</p>
        <p>Ratting:{ratings}</p>
      </div>
      <button className='add-to-cart'>Add To Cart</button>
    </div>
  );
};

export default Products;