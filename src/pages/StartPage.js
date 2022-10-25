import React from 'react'
import { useState } from 'react'
import Topmenu from '../sections/Topmenu'
import BannerSmall from '../sections/BannerSmall'
import MainBanner from '../sections/MainBanner'
import OurSpecialty from '../sections/OurSpecialty'
import ProductColumns from '../sections/ProductColumns'
import ProductDisplay from '../sections/ProductDisplay'
import SecondBanner from '../sections/SecondBanner'
import Showcase from '../sections/Showcase'
import ProductGrid from '../sections/ProductGrid'

const StartPage = () => {
  window.top.document.title = 'Fixxo.'
  
  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, productName: "Autumn Dress", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, productName: "Fur Coat DLX", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, productName: "September Sneaker", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, productName: "Mini Bag", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 5, productName: "November Top", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 6, productName: "Stripes Onesie", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 7, productName: "Leather DLX", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 8, productName: "Septmeber Jacket", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/3310694/pexels-photo-3310694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  ])

  return (
    <>
        <Topmenu />
        <Showcase />
        <MainBanner />
        <ProductGrid title="Featured Products" products={featuredProducts} />
        <SecondBanner />
        <OurSpecialty />
        <ProductDisplay />
        <BannerSmall />
        <ProductColumns />
    </>
  )
}

export default StartPage