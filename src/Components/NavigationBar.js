import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navbarItems } from './NavigationData';

const NavigationBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navbar">
      <div className="center">
        <div className="header">
          <NavLink to="/" activeClassName="active">
            <div className="brand">
              <i className="fas fa-birthday-cake">bakes</i>
            </div>
          </NavLink>

          <div className="largeList">
            {navbarItems.map((item) => {
              return (
                <NavLink to={item.url} activeClassName="active">
                  <span className="navList" key={item.page}>
                    {item.page}
                  </span>
                </NavLink>
              );
            })}
          </div>
          <button className="toggle">
            <i className="fas fa-bars" onClick={handleToggle}></i>
          </button>
          <div className="bag">
            <NavLink to="cart" activeClassName="active">
              <button className="cartShortcut">
                <i className="fas fa-shopping-bag"></i>
              </button>
            </NavLink>
          </div>
        </div>

        <div
          style={{ width: '100vw' }}
          className={`${
            toggleMenu ? 'toggleContainer show' : 'toggleContainer'
          }`}
        >
          <ul>
            {navbarItems.map((item) => {
              return (
                <NavLink to={item.url} activeClassName="active">
                  <li className="navList" key={item.page}>
                    {item.page}
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
