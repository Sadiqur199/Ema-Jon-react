import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';
import './Shop.css'

const Shop = () => {
  const [products, setProduct] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <div className='shop-container'>
      <div>
        <div className="products-container"> 
          {
            products.map(product => <Products
              key={product.id}
              product={product}
            ></Products>)
          }
        </div>
      </div>
      <div className="cart-container">
        <p>Add To Cart </p>
      </div>
    </div>
  );
};

export default Shop;