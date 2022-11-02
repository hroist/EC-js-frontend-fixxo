import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/Contexts'
import Footer from '../sections/Footer'
import ProductDetails from '../sections/ProductDetails'
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
        <SiteTitle title={thisProduct.name} />
        <ProductDetails item={thisProduct} />
    </>
  )
}

export default ProductDetailsPage