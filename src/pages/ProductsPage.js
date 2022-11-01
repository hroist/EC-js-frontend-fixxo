import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Contexts'
import Footer from '../sections/Footer'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductsPage = () => {
  window.top.document.title = 'Fixxo. || Products '
  const productContext = useContext(ProductContext)

  return (
    <>
        <Topmenu />
        <SiteTitle title="Products" />
        <ProductGrid title="Products" items={productContext.allProducts} />
        <Footer />
    </>
  )
}

export default ProductsPage