import React, {useContext} from 'react'
import placeholder from '../assets/images/placeholders/prod-card-placeholder.png'
import ProductGrid from './ProductGrid'
import { ProductContext } from '../contexts/Contexts'

const ProductColumns = () => {

  const productContext = useContext(ProductContext)

  return (
    <section className="product-columns">
    <div className="container">
            <h2 className="column-title">Latest Products</h2>
            <ProductGrid classNameCard="text-right l-content" classNameGrid="product-columns-grid" classNameSection="product-grid-container" items={productContext.featuredProducts} />
            <h2 className="column-title">Best Selling Products</h2>
            <ProductGrid classNameCard="text-right l-content" classNameGrid="product-columns-grid" classNameSection="product-grid-container" items={productContext.featuredProducts} />
            <h2 className="column-title">Top Reacted Products</h2>
            <ProductGrid classNameCard="text-right l-content" classNameGrid="product-columns-grid" classNameSection="product-grid-container" items={productContext.featuredProducts} />
    </div>
</section>
  )
}

export default ProductColumns