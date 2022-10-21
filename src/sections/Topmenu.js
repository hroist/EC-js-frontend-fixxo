import React, { useState } from 'react'
import MenuLinkCircle from '../components/ui/MenuLinkCircle'
import MenuCircle from '../components/ui/MenuCircle'
import { NavLink } from 'react-router-dom'

const Topmenu = () => {

    // change bg-color on scroll
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true) 

        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

  return (
    <header className={color ? 'top-menu top-menu-bg' : 'top-menu'}>
    <div className="container sb-content">
        <div className="logo">
            Fixxo.
        </div>
        <div className="wrapper">
            <nav className="navbar">
                <NavLink className="nav-item" to="/" end>Home</NavLink>
                <NavLink className="nav-item" to="/categories" end>Categories</NavLink>
                <NavLink className="nav-item" to="/products" end>Products</NavLink>
                <NavLink className="nav-item" to="/contacts" end>Contacts</NavLink>
            </nav>
        </div>
        <div className="menu-links sb-content">
            <MenuLinkCircle icon="fa-regular fa-code-compare fa-flip-horizontal" link="/compare" />    
            <MenuLinkCircle icon="fa-regular fa-heart" badgetext="4" link="/wishlist" />             
            <MenuLinkCircle icon="fa-regular fa-bag-shopping" badgetext="3" link="/shopping-cart" />
            <div className="search">
                <MenuCircle icon="fa-regular fa-magnifying-glass" className="searchBtn" />
                <MenuCircle icon="fa-regular fa-xmark" className="closeBtn" />
            </div>
            <MenuCircle icon="fa-regular fa-bars" className="navbarToggle" />
        </div>
        <div className="searchBox">
            <input type="text" placeholder="Search . . . "/>
        </div>
    </div>
</header>
  )
}

export default Topmenu