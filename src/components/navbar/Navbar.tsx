import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "@mantine/core";

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth() || {};
  console.log(currentUser);

  const handleLogOut = async () => {
    setError("");
    if (logout)
      try {
        await logout();
      } catch {
        setError("Failed to log out");
      }
  };
  return (
    <>
      {error !== "" && (
        <Alert
          title="Oops!"
          color="red"
          withCloseButton
          pos="absolute"
          bottom={5}
          right={5}
          w="300"
          h="60"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
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
        {currentUser && currentUser.email ? (
          <div className="signup">
            <button type="button" onClick={handleLogOut}>
              Logout
            </button>
          </div>
        ) : (
          <div className="signup">
            <button type="button">
              <Link to="/login">Login</Link>
            </button>
          </div>
        )}

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
              {currentUser && currentUser.email ? (
                <div className="signup-menu">
                  <button type="button" onClick={handleLogOut}>
                    Log out
                  </button>
                </div>
              ) : (
                <div className="signup-menu">
                  <button type="button">Log in</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
