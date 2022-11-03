import React, {useContext} from 'react'
import { ProductContext } from '../contexts/Contexts'
import ProductCard from '../components/ProductCard'

const ProductColumns = () => {

  const productContext = useContext(ProductContext)

  return (
    <section className="product-columns">
      <div className="container">
        <div className="product-columns-grid">
          <h2 className="column-title">Latest Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[0]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[3]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[2]} />
          <h2 className="column-title">Best Selling Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[2]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[2]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[4]} />            
          <h2 className="column-title">Top Reacted Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[2]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[3]} />
          <ProductCard classNameCard="text-right l-content" item={productContext.allProducts[1]} />
        </div>
      </div>
</section>
  )
}

export default ProductColumns