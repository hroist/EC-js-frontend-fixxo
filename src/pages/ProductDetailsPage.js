import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/Contexts'
import ProductDetails from '../sections/ProductDetails'
import ProductGrid from '../sections/ProductGrid'
import SiteTitle from '../sections/SiteTitle'
import Topmenu from '../sections/Topmenu'

const ProductDetailsPage = () => {
  window.top.document.title = 'Fixxo. || Product X'
 
  const productContext = useContext(ProductContext)
  const  params  = useParams()

  const thisProduct = productContext.allProducts.find(obj => {
    return obj.articleNumber == params.id
  })

  return (
    <>
        <Topmenu />
        <SiteTitle title={thisProduct.name} parentTitle={<li>Products</li>} />
        <ProductDetails item={thisProduct} />
        <ProductGrid classNameCard="text-left" classNameGrid="related-product-grid" items={productContext.featuredProducts} title="Related products" /> 
    </>
  )
}

export default ProductDetailsPage