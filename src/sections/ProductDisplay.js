import React, { useContext } from 'react'
import { ProductContext } from '../contexts/Contexts'
import ProductGrid from './ProductGrid'

const ProductDisplay = () => {
  const productContext = useContext(ProductContext)

  return (
        <div className="container">
            <div className="product-grid-large">
                <div className="display-image-large"> 
                    <h1>2 FOR USD $29</h1>
                    <button className="button-theme-white">FLASH SALE</button>
                </div>
                <ProductGrid classNameGrid="product-display-grid" classNameSection="product-display-container" items={productContext.featuredProducts} />
            </div>
            <div className="product-grid-large">
                <ProductGrid classNameGrid="product-display-grid" classNameSection="product-display-container" items={productContext.featuredProducts} />
                <div className="display-image-large"> 
                    <h1>2 FOR USD $29</h1>
                    <button className="button-theme-white">FLASH SALE</button>
                </div>
            </div>
        </div>
  )
}

export default ProductDisplay