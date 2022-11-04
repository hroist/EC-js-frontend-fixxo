import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AllProductContext, FeaturedProductContext } from '../contexts/Contexts'
import ProductDetails from '../sections/ProductDetails'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductDetailsPage = () => {
  window.top.document.title = 'Fixxo. || Product X'
 
  const productContext = useContext(AllProductContext)
  const featuredProductContext = useContext(FeaturedProductContext)
  const  params  = useParams()

  const thisProduct = productContext.find(obj => {
    return obj.articleNumber == params.id
  })

  return (
    <>
        <Topmenu />
        <SiteTitle title={thisProduct.name} parentTitle={<li>Products</li>} />
        <ProductDetails item={thisProduct} />
        <ProductGrid classNameCard="text-left" classNameGrid="related-product-grid" items={featuredProductContext} title="Related products" /> 
    </>
  )
}

export default ProductDetailsPage