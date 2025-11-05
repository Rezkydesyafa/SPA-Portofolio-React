// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className='nav-links-container'>
          <ul className='nav-links'>
            <li>
              <Link to='/experience'>Experience</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <p className='footer-copyright'>
        Copyright &#169; 2025 Rezky desyafa. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
