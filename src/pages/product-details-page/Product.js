import React from 'react'
import Footer from '../../components/sections/Footer'
import SiteTitle from '../../components/sections/SiteTitle'
import Topmenu from '../../components/sections/Topmenu'
import ProductDetails from './ProductDetails'

const Product = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle />
        <ProductDetails />
        <Footer />
    </>
  )
}

export default Product