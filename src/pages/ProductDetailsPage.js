import React from 'react'
import Footer from '../sections/Footer'
import ProductDetails from '../sections/ProductDetails'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductDetailsPage = () => {
  window.top.document.title = 'Fixxo. || Product X'

  return (
    <>
        <Topmenu />
        <SiteTitle title="Product XXX" />
        <ProductDetails />
        <Footer />
    </>
  )
}

export default ProductDetailsPage