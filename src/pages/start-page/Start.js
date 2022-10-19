import React from 'react'
import Footer from '../../components/sections/Footer'
import Topmenu from '../../components/sections/Topmenu'
import BannerSmall from './BannerSmall'
import FeaturedProducts from './FeaturedProducts'
import MainBanner from './MainBanner'
import OurSpecialty from './OurSpecialty'
import ProductColumns from './ProductColumns'
import ProductDisplay from './ProductDisplay'
import SecondBanner from './SecondBanner'
import Showcase from './Showcase'

const Start = () => {
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
        <Footer />  
    </>
  )
}

export default Start