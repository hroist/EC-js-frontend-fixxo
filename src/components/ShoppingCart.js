import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCart = ({className}) => {
    const { cartItems } = useShoppingCart()


  return (

        <div id="shoppingCart" className={`offcanvas-right ${className}`}>
            <h2>
                <i className='fa-regular fa-bag-shopping'></i> Your shopping cart
            </h2>
            <div>
                {
                    cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />) )
                }
            </div>
        </div>
        

  )
}

export default ShoppingCart