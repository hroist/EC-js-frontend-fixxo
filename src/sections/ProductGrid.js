import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({ title, classNameSection, classNameGrid, items = [] }) => {

  return (
    <section className={`product-grid-container txt-c ${classNameSection}`}>
    <h1 className="section-title">{title}</h1>
    <div className="container-small">
        <div className={classNameGrid}>
            {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
            }                     
        </div>
    </div>
</section>
  )
}

export default ProductGrid