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
import { FeaturedProductContext } from '../contexts/Contexts'
import InfoIcons from '../sections/InfoIcons'

const StartPage = () => {
  window.top.document.title = 'Fixxo.'
  const productContext = useContext(FeaturedProductContext)

  
  return (
    <>
        <Topmenu />
        <Showcase />
        <MainBanner />
        <ProductGrid title="Featured Products" classNameGrid="featured-product-grid" items={productContext} />
        <SecondBanner />
        <OurSpecialty />
        <ProductDisplay />
        <BannerSmall />
        <ProductColumns />
        <InfoIcons />
    </>
  )
}

export default StartPage