import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import BakesHome from './Pages/BakesHome';
import Review from './Components/Review';
import Cart from './Components/Cart';
import Faqs from './Components/Faqs';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<BakesHome />} />
      <Route path="menu" element={<Menu />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="cart" element={<Cart />} />
      <Route path="review" element={<Review />} />
    </Routes>
  );
};

export default Routing;
