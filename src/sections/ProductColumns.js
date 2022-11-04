import React, {useContext} from 'react'

import ProductCard from '../components/ProductCard'
import { AllProductContext } from '../contexts/Contexts'

const ProductColumns = () => {

  const productContext = useContext(AllProductContext)

  return (
    <section className="product-columns">
      <div className="container">
        <div className="product-columns-grid">
          <h2 className="column-title">Latest Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext[6]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[5]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[4]} />
          <h2 className="column-title">Best Selling Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext[20]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[13]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[3]} />            
          <h2 className="column-title">Top Reacted Products</h2>
          <ProductCard classNameCard="text-right l-content" item={productContext[9]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[7]} />
          <ProductCard classNameCard="text-right l-content" item={productContext[5]} />
        </div>
      </div>
</section>
  )
}

export default ProductColumns