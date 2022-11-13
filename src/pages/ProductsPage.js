import React, { useEffect } from 'react'
import { useProductContext } from '../contexts/Contexts'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductsPage = () => {
  window.top.document.title = 'Fixxo. || Products '
  const {products, fetchProducts} = useProductContext()
      
  useEffect(() => {
    fetchProducts(0)
  }, [])

  return (
    <>
        <Topmenu />
        <SiteTitle title="Products" />
        <ProductGrid title="Products" classNameGrid="featured-product-grid" items={products} />
    </>
  )
}

export default ProductsPage