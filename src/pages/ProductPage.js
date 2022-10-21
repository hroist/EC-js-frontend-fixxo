import React from 'react'
import Footer from '../sections/Footer'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'
import ProductDetails from '../sections/ProductDetails'

const ProductPage = () => {
  return (
    <>
        <Topmenu />
        <SiteTitle />
        <ProductDetails />
        <Footer />
    </>
  )
}

export default ProductPage