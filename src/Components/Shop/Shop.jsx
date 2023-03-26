import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
  const [products,setProduct] = useState([])

  useEffect(() =>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProduct(data))
  },[])
  return (
    <div className='shop-container'>
      <div className="products-container">
      <h1>Product Comming Soon:{products.length}</h1>
      </div>
      <div className="cart-container">
      <p>Add To Cart </p>
      </div>
    </div>
  );
};

export default Shop;