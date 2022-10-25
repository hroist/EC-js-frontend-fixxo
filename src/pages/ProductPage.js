import React from 'react'
import Footer from '../sections/Footer'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'
import ProductDetails from '../sections/ProductDetails'

const ProductPage = () => {
  window.top.document.title = 'Fixxo. || Products '

  return (
    <>
        <Topmenu />
        <SiteTitle title="Product XXX" />
        <ProductDetails />
        <Footer />
    </>
  )
}

export default ProductPage