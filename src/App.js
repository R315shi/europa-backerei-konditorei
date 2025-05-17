import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './pages/navbar';
// import Menu1 from './pages/Menu1';
// import Menu2 from './pages/Imageslider';
import Products from './pages/Products';




function App() {
  return (
    <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element={<Home />} />
    <Route path="/Product" element={<Products />} />
          
        </Routes>
        {/* <Menu1 />
        <Menu2 /> */}
    </Router>
  );
}

export default App;