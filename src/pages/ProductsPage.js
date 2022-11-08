import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/Contexts'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductsPage = () => {
  window.top.document.title = 'Fixxo. || Products '
  const {allProducts, fetchAllProducts} = useProductContext()
      
  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <>
        <Topmenu />
        <SiteTitle title="Products" />
        <ProductGrid title="Products" classNameGrid="featured-product-grid" items={allProducts} />
    </>
  )
}

export default ProductsPage