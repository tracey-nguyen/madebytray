import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        madebytray
      </div>
      <Navbar />
    </div>
  )
}

export default Header;