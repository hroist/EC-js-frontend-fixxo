import React,{ useEffect } from 'react'
import { useProductContext } from '../contexts/Contexts'
import ProductCard from '../components/ProductCard'


const ProductColumns = () => {

  const {product, fetchProduct} = useProductContext()
      
    useEffect(() => {
      fetchProduct("431255c5-eea7-40bd-9260-06ad7e83fbcd")
    }, [])

  return (
    <section className="product-columns">
      <div className="container">
        <div className="product-columns-grid">
          <h2 className="column-title">Latest Products</h2>
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />
          <h2 className="column-title">Best Selling Products</h2>
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />            
          <h2 className="column-title">Top Reacted Products</h2>
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />
          <ProductCard classNameCard="text-right l-content" item={product} />
        </div>
      </div>
</section>
  )
}

export default ProductColumns