import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Food-Mania/Header';
import Home from './Food-Mania/Home';
import About from './Food-Mania/About';
import Menu from './Food-Mania/Menu';
import Gallery from './Food-Mania/Gallery';
import Review from './Food-Mania/Review';
import Order from './Food-Mania/Order';
import Cart from './Food-Mania/Cart';
import Fav from './Food-Mania/Fav';
import Search from './Food-Mania/Search';
import { CartProvider } from './Context/CartContext';
import { FavProvider } from './Context/FavContext';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <>
      <CartProvider>
        <FavProvider>
          <ToastContainer autoClose={1000} position="top-center" />
          <BrowserRouter>
            <Header />
            <div className="containt">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='About' element={<About />} />
                <Route path='Menu' element={<Menu />} />
                <Route path='Gallery' element={<Gallery />} />
                <Route path='Review' element={<Review />} />
                <Route path='Order' element={<Order />} />
                <Route path='Cart' element={<Cart />} />
                <Route path='Fav' element={<Fav />} />
                <Route path='Search' element={<Search />} />
              </Routes>
            </div>
          </BrowserRouter>
        </FavProvider>
      </CartProvider>
    </>
  );
};

export default App;
