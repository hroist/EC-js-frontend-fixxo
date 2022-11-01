import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({title, items = []}) => {

  return (
    <section className="featured-products txt-c">
    <h1 className="section-title">{title}</h1>
    <div className="container-small">
        <div className="featured-product-grid">
            {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }                     
        </div>
    </div>
</section>
  )
}

export default ProductGrid