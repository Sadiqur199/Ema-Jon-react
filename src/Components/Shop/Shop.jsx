import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';
import './Shop.css'

const Shop = () => {
  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

// btn add to cart function
  const handelProduct = (product) =>{
   console.log('product added')
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
        <h5>Add To Cart </h5>
        <p>Selected Item : {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;