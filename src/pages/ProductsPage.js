import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Contexts'
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
        <ProductGrid title="Products" classNameGrid="featured-product-grid" items={productContext.allProducts} />
    </>
  )
}

export default ProductsPage