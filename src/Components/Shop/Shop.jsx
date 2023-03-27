import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Products';
import './Shop.css'

const Shop = () => {
  const [products, setProducts]= useState([]);
  const [cart, setCart]= useState([]);
  
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

// btn add to cart function
  const handelProduct = (product) =>{
    const newCart = [...cart ,product]
    setCart(newCart)

  }

  return (
    <div className='shop-container'>
      <div>
        <div className="products-container"> 
          {
            products.map(product => <Products
              key={product.id}
              product={product}
              handelProduct = {handelProduct}
            ></Products>)
          }
        </div>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>

      </div>
    </div>
  );
};

export default Shop;