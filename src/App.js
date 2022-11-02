import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.min.css';
import StartPage from './pages/StartPage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import ContactPage from './pages/ContactPage';
import ComparePage from './pages/ComparePage';
import WishlistPage from './pages/WishlistPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './sections/Footer';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { ProductContext } from './contexts/Contexts';

function App() {

  const [products, setProducts] = useState({
    allProducts: [
      { articleNumber: 1, name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: 5, imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 2, name: "Fur Coat DLX", category: "Coats", price: "$55.00", rating: 4, imageName: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 3, name: "September Sneaker", category: "Shoes", price: "$13.00", rating: 3, imageName: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 4, name: "Mini Bag", category: "Bags", price: "$33.00", rating: 5, imageName: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 5, name: "November Top", category: "Tops", price: "$75.00", rating: 1, imageName: "https://images.pexels.com/photos/944761/pexels-photo-944761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 6, name: "Stripes Onesie", category: "Dresses", price: "$25.00", rating: 2, imageName: "https://images.pexels.com/photos/1135531/pexels-photo-1135531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 7, name: "Leather DLX", category: "Fashion", price: "$30.00", rating: 3, imageName: "https://images.pexels.com/photos/1035685/pexels-photo-1035685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 8, name: "Septmeber Jacket", category: "Fashion", price: "$37.00", rating: 5, imageName: "https://images.pexels.com/photos/3310694/pexels-photo-3310694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    ],
    featuredProducts: [
      { articleNumber: 1, name: "Autumn Dress", category: "Dresses", price: "$35.00", rating: 5, imageName: "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 2, name: "Fur Coat DLX", category: "Coats", price: "$55.00", rating: 4, imageName: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 3, name: "September Sneaker", category: "Shoes", price: "$13.00", rating: 3, imageName: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      { articleNumber: 4, name: "Mini Bag", category: "Bags", price: "$33.00", rating: 5, imageName: "https://images.pexels.com/photos/1374910/pexels-photo-1374910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    ]
  })


  // const [products, setProducts] = useState({
  //   allProducts: [],
  //   featuredProducts: []
  //   })

  // useEffect( () => {

  //   const fetchFeaturedProducts = async () => {
  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8');
  //     setProducts({...products, featuredProducts: await result.json()})
  //   }
  //   fetchFeaturedProducts()

  //   const fetchAllProducts = async () => {
  //     let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=22')
  //     setProducts({...products, allProducts: await result.json()})
  //   }
  //   fetchAllProducts()

  // }, [setProducts])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/contacts" element={<ContactPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/shopping-cart" element={<ShoppingCartPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ProductContext.Provider>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
