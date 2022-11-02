import React, { useContext } from 'react'
import Topmenu from '../sections/Topmenu'
import BannerSmall from '../sections/BannerSmall'
import MainBanner from '../sections/MainBanner'
import OurSpecialty from '../sections/OurSpecialty'
import ProductColumns from '../sections/ProductColumns'
import ProductDisplay from '../sections/ProductDisplay'
import SecondBanner from '../sections/SecondBanner'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../contexts/Contexts'

const StartPage = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(ProductContext)

  
  return (
    <>
        <Topmenu />
        <Showcase />
        <MainBanner />
        <ProductGrid title="Featured Products" classNameGrid="featured-product-grid" items={productContext.featuredProducts} />
        <SecondBanner />
        <OurSpecialty />
        <ProductDisplay />
        <BannerSmall />
        <ProductColumns />
    </>
  )
}

export default StartPage