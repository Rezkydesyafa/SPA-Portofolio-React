// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav id='desktop-nav'>
        <Link to='/' className='logo'>
          Rezky Desyafa
        </Link>
        <div>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id='hamburger-nav'>
        <Link to='/' className='logo'>
          Rezky Desyafa
        </Link>
        <div className='hamburger-menu'>
          <div
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to='/' onClick={handleLinkClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/experience' onClick={handleLinkClick}>
                Experience
              </Link>
            </li>
            <li>
              <Link to='/projects' onClick={handleLinkClick}>
                Projects
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
