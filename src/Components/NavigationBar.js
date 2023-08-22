import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import { navbarItems } from './NavigationData';

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navbar">
      <div className="center">
        <div className="header">
          <NavLink to="/">
            <div className="brand">
              <i className="fas fa-birthday-cake">bakes</i>
            </div>
          </NavLink>

          <div className="largeList">
            {/* {navbarItems.map((item) => {
              return (
                <NavLink to={item.url}>
                  <span className="navList" key={item.page}>
                    {item.page}
                  </span>
                </NavLink>
              );
            })} */}
            <NavLink to="menu">
              <span className="navList">Menu</span>
            </NavLink>
            <NavLink to="review">
              <span className="navList">Reviews</span>
            </NavLink>
            <NavLink to="gallery">
              <span className="navList">Gallery</span>
            </NavLink>
            <NavLink to="faqs">
              <span className="navList">FAQs</span>
            </NavLink>
          </div>
          <button className="toggle">
            <i className="fas fa-bars" onClick={handleToggle}></i>
          </button>
          <div className="bag">
            <NavLink to="cart">
              <button className="cartShortcut">
                <i className="fas fa-shopping-bag"></i>
              </button>
            </NavLink>
          </div>
        </div>

        <div
          style={{ width: '100vw', overflow: 'scroll' }}
          className={`${
            toggleMenu ? 'toggleContainer show' : 'toggleContainer'
          }`}
        >
          <ul>
            {/* {navbarItems.map((item) => {
              return (
                <NavLink to={item.url}>
                  <li className="navList" key={item.id}>
                    {item.page}
                  </li>
                </NavLink>
              );
            })} */}
            <NavLink to="menu">
              <li className="navList">Menu</li>
            </NavLink>
            <NavLink to="review">
              <li className="navList">Reviews</li>
            </NavLink>
            <NavLink to="gallery">
              <li className="navList">Gallery</li>
            </NavLink>
            <NavLink to="faqs">
              <li className="navList">FAQs</li>
            </NavLink>
            <NavLink to="cart">
              <li className="navList">Cart</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
