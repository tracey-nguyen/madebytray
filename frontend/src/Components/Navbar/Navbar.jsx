import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li id={dropDown ? "info" : null} onClick={() => setDropDown((dropDown) => !dropDown)}>
          <div>Info</div>
          {dropDown ? <DropDown setDropDown={setDropDown} /> : null}
        </li>
      </ul>
    </div>
  )
}

export default Navbar;