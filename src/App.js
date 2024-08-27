
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import ShopDeatail from './pages/ShopDetail';
import ShopCart from './pages/ShopCart';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Shop-Deatil' element={<ShopDeatail/>} />
        <Route path='/Shop-Cart' element={<ShopCart/>} />
      </Routes>
    </Router>
  );
}

export default App;
