import React from 'react';
import './Footer.css';
import instagram_logo from '../Assets/instagram_logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer-menu'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/faq'>FAQ</Link></li>
      </ul>
      <div className='social-links'>
        <img className="footer-img" src={instagram_logo} alt="instagram logo"/>
      </div>
    </div>
  )
}

export default Footer;