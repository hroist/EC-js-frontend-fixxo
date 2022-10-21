import React from 'react'
import Topmenu from '../sections/Topmenu'
import BannerSmall from '../sections/BannerSmall'
import FeaturedProducts from '../sections/FeaturedProducts'
import MainBanner from '../sections/MainBanner'
import OurSpecialty from '../sections/OurSpecialty'
import ProductColumns from '../sections/ProductColumns'
import ProductDisplay from '../sections/ProductDisplay'
import SecondBanner from '../sections/SecondBanner'
import Showcase from '../sections/Showcase'

const StartPage = () => {
  return (
    <>
        <Topmenu />
        <Showcase />
        <MainBanner />
        <FeaturedProducts />
        <SecondBanner />
        <OurSpecialty />
        <ProductDisplay />
        <BannerSmall />
        <ProductColumns />
    </>
  )
}

export default StartPage