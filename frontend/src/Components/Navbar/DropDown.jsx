import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = props => {
  const { setDropDown } = props;

  const closeDropdown = () => {
    setDropDown(false);
  }

  return (
    <div className='dropdown-menu'>
      <ul className='dropdown-content'>
        <li onClick={closeDropdown}><Link to='/about'>About</Link></li>
        <li onClick={closeDropdown}><Link to='/contact'>Contact</Link></li>
        <li onClick={closeDropdown}><Link to='/faq'>FAQ</Link></li>
      </ul>
    </div>
  )
}

export default DropDown;
