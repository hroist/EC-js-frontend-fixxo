import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../contexts/Contexts'
import ProductDetails from '../sections/ProductDetails'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductDetailsPage = () => {
  window.top.document.title = 'Fixxo. || Product X'

  const {featuredProducts, fetchFeaturedProducts, product, fetchProduct} = useProductContext()
  const  params  = useParams() 

  useEffect(() => {
    fetchFeaturedProducts(8)
    fetchProduct(params.id)
  }, [])
 

  return (
    <>
        <Topmenu />
        <SiteTitle title={product.name} parentTitle={<li>Products</li>} />
        <ProductDetails item={product} />
        <ProductGrid classNameCard="text-left" classNameGrid="related-product-grid" items={featuredProducts} title="Related products" /> 
    </>
  )
}

export default ProductDetailsPage