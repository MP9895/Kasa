import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Accommodation from './pages/accomodation/Accomodation';
import About from './pages/about/About';
import Error from './pages/error/Error';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Kasa" element={<Home />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;