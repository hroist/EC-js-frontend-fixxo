import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({ title, className, items = [] }) => {

  return (
    <section className="product-grid-container txt-c">
    <h1 className="section-title">{title}</h1>
    <div className="container-small">
        <div className={className}>
            {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }                     
        </div>
    </div>
</section>
  )
}

export default ProductGrid