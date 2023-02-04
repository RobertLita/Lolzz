import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar_logo_container">
        <p className="logo">
          <Link to="/">Lolzz</Link>
        </p>
      </div>
      <div className="navbar_links">
        <div className="navbar_links_container">
          <p>
            <Link to="/history">Search</Link>
          </p>
          <p>
            <Link to="/history">??</Link>
          </p>
          <p>
            <Link to="/register">Sign up</Link>
          </p>
        </div>
      </div>
      <div className="signup">
        <button type="button">
          <Link to="/login">Login</Link>
        </button>
      </div>

      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <Link to="/history">Search</Link>
              </p>
              <p>
                <Link to="/history">??</Link>
              </p>
              <p>
                <Link to="/history">Sign up</Link>
              </p>
            </div>
            <div className="signup-menu">
              <button type="button">Login</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
