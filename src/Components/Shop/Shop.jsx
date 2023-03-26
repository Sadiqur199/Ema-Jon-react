import React, { useEffect, useState } from 'react';
import Products from '../Product/Products';
import './Shop.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle,faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
  const [products, setProduct] = useState([])
  const [cart, setCart] = useState([])
  const [price, setPrice] = useState(0)
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

// btn add to cart function
  const handelProduct = (product) =>{
    const newCart = [...cart ,product]
    setCart(newCart)
    const newPrice = price+1;
    console.log(newPrice)
    setPrice(newPrice)

    
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
        <p>Total Price : {price}</p>
        <p>Total Shipping Cost : </p>
        <h4>Grand Total : </h4>
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
    </div>
  );
};

export default Shop;