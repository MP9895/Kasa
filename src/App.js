import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Kasa" element={<Home />} />
        {/* ... autres routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;