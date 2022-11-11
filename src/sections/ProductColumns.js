import React,{ useEffect } from 'react'
import { useProductContext } from '../contexts/Contexts'
import { ProductColumn } from '../components/ProductColumn'


const ProductColumns = () => {

  const {products, fetchProducts} = useProductContext()
      
    useEffect(() => {
      fetchProducts(3)
    }, [])

  return (
    <section className="product-columns">
      <div className="container">
        <div className="product-columns-grid">
          <h2 className="column-title">Latest Products</h2>
          <ProductColumn items={products} />
          <h2 className="column-title">Best Selling Products</h2>
          <ProductColumn items={products} />           
          <h2 className="column-title">Top Reacted Products</h2>
          <ProductColumn items={products} />
        </div>
      </div>
</section>
  )
}

export default ProductColumns