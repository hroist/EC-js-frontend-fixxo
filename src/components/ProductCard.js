import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {

    const addToWishlist = (e) => {
        console.log(`${e} added to wishlist`)
    }
    const addToCompare = (e) => {
        console.log("added to compare")
    }
    const addToCart = (e) => {
        console.log("added to shopping cart")
    }

  return (
    <>
        <div className="product-card c-content">
            <div className="card-image">
                <ul className="card-image-menu">
                    <li>
                        <button onClick={addToWishlist} className="menu-link-circle c-content">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </li>
                    <li>
                        <button onClick={addToCompare} className="menu-link-circle c-content">
                            <i className="fa-regular fa-code-compare fa-flip-horizontal"></i>
                        </button>
                    </li>
                    <li>
                        <button onClick={addToCart} className="menu-link-circle c-content">
                            <i className="fa-regular fa-bag-shopping"></i>
                        </button>
                    </li>
                </ul>
                <img src={item.img} alt={item.productName} />
                <NavLink to={`/products/${item.id}`} className="product-card-quickview">
                    QUICK VIEW
                </NavLink>
                <div className="card-background"></div>
            </div>
            <div className="card-text text-center">
                <h3>{item.category}</h3>
                <h2>{item.productName}</h2>
                <div className="card-review-stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>
                <p className="card-original-price">{item.price}</p>
            </div>
        </div>   
    </>
  )
}

export default ProductCard