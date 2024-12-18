import React, { useState } from "react";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        {/* Brand Section */}
        <div className="site-header__start">
          <a href="#" className="brand">
            Brand
          </a>
        </div>

        {/* Navigation Section */}
        <div className="site-header__middle">
          <nav className="nav">
            <button
              className="nav__toggle"
              aria-expanded={showMenu ? "true" : "false"}
              onClick={toggleMenu}
            >
              menu
            </button>
            <ul className={`nav__wrapper ${showMenu ? "active" : ""}`}>
              <li className="nav__item">
                <a href="#">Home</a>
              </li>
              <li className="nav__item">
                <a href="#">About</a>
              </li>
              <li className="nav__item">
                <a href="#">Services</a>
              </li>
              <li className="nav__item">
                <a href="#">Hire us</a>
              </li>
              <li className="nav__item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Sign In Section */}
        <div className="site-header__end">
          <a href="#">Sign in</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
