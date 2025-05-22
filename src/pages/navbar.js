import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <span className="blue">Europa-</span>
          <span className="navy">Backerei-Konditorei</span>
        </Link>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/location" onClick={() => setIsOpen(false)}>Location</Link></li>
        {/* <li><Link to="/reviews" onClick={() => setIsOpen(false)}>Reviews</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;