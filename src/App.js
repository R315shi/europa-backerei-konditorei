import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MapPage from './pages/MapPage';
import Home from './pages/Home';
import Navbar from './pages/navbar';
import ProductPage from './components/ProductPage';
import CustomerReviews from './pages/CustomerReviews';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // animate only once
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinks" element={<ProductPage type="drink" />} />
        <Route path="/hotdrinks" element={<ProductPage type="hotdrinks" />} />
        <Route path="/alcoholicdrinks" element={<ProductPage type="alcoholicdrinks" />} />
        <Route path="/pizza" element={<ProductPage type="pizza" />} />
        <Route path="/grill" element={<ProductPage type="grill" />} />
        <Route path="/pasta" element={<ProductPage type="pasta" />} />
        <Route path="/burek" element={<ProductPage type="burek" />} />
        <Route path="/salad" element={<ProductPage type="salad" />} />
        <Route path="/burger" element={<ProductPage type="burger" />} />
        <Route path="/location" element={<MapPage />} />
        {/* <Route path="/reviews" element={<CustomerReviews />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
