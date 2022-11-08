import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {
    const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

  return (
    <div className='shoppingcart-item'>
        <div className='item-image'>
            <img src={item.product.imageName} alt={item.product.name} />
        </div>
        <div className='item-info'>
            <div className="item-info-name">{item.product.name}</div>
            <div className='item-info-quantity'>
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
        </div>
        <div className='item-price'>
            <div><p>{item.product.price * item.quantity}</p></div>
            <button onClick={() => removeItem(item.product.articleNumber)}><i className='fa-solid fa-trash'></i></button>
        </div>
    </div>
  )
}

export default ShoppingCartItem