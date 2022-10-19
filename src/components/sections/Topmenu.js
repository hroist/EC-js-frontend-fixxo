import React, { useState } from 'react'
import MenuLinkCircle from '../ui/MenuLinkCircle'

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
                <a className='nav-item' href=''>Home</a>
                <a className='nav-item' href=''>Categories</a>
                <a className='nav-item' href=''>Products</a>
                <a className='nav-item' href=''>Contacts</a>
            </nav>
        </div>
        <div className="menu-links sb-content">
            <a href="#" >
                <MenuLinkCircle icon="fa-regular fa-code-compare fa-flip-horizontal" />
            </a>
            <a href="#" >              
                <MenuLinkCircle icon="fa-regular fa-heart" badgetext="4" />             
            </a>
            <a href="#" >
                <MenuLinkCircle icon="fa-regular fa-bag-shopping" badgetext="3" />
            </a>
            <div className="search">
                <MenuLinkCircle icon="fa-regular fa-magnifying-glass" className="searchBtn" />
                <MenuLinkCircle icon="fa-regular fa-xmark" className="closeBtn" />
            </div>
            <MenuLinkCircle icon="fa-regular fa-bars" className="navbarToggle" />
        </div>
        <div className="searchBox">
            <input type="text" placeholder="Search . . . "/>
        </div>
    </div>
</header>
  )
}

export default Topmenu