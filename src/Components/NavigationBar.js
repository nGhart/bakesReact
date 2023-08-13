import React, { useState } from 'react';
//import { NavLink } from 'react-router-dom';
import { navbarItems } from './NavigationData';

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <nav className="navbar">
      <div className="center">
        <div className="header">
          <div className="brand">
            <i className="fas fa-birthday-cake">bakes</i>
          </div>
          <button className="toggle">
            <i className="fas fa-bars" onClick={handleToggle}></i>
          </button>
        </div>
        <div
          className={`${
            toggleMenu ? 'toggleContainer show' : 'toggleContainer'
          }`}
        >
          <ul>
            {/* <li>Menu</li>
            <li>Reviews</li>
            <li>Gallery</li>
            <li>FAQs</li> */}
            {navbarItems.map((item) => {
              return (
                <li className="navList" key={item.id}>
                  {item.page}
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social">
          <button className="cartShortcut">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
