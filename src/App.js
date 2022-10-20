import './App.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/start-page/StartPage';
import ContactPage from './pages/contact-page/ContactPage';
import ProductPage from './pages/product-details-page/ProductPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
