import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar: React.FC = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='navbar'>
      <div className='navbar_logo_container'>
          <p className='logo'><a href="#">Lolzz</a></p>
      </div>
      <div className='navbar_links'>
        <div className="navbar_links_container">
          <p><a href="#">Search</a></p>
          <p><a href="#">??</a></p>
          <p><a href="#">Register</a></p>
        </div>
      </div>
      <div className='signup'>
        <button type="button">Sign up</button>
      </div>

      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a href="#">Search</a></p>
            <p><a href="#">??</a></p>
            <p><a href="#">Register</a></p>
          </div>
          <div className="signup-menu">
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar