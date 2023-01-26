import React from "react";
import { useResponsive } from "../../Utilities/Devices";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const isMobile = useResponsive();

  const navItems = [
    { link: "/", name: "Home" },
    { link: "/checkout", name: "Checkout" },
  ];

  return (
    <>
      <header className="header">
        {isMobile ? (
          <div className="logo">
          </div>
        ) : (
            <img 
                src="https://ganstudio.com/assets/gan_logo.png" 
                className="logo-icon" 
                alt="logo" 
            />
        )}
        <nav className={`menu`}>
            <ul className="menu-list">
                {navItems.map((item) => (
                    <NavLink key={item.name} className="menu-item" to={item.link}>
                        {item.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
        <Cart />
      </header>

      {isMobile && (       
        <nav className="menu">
            <ul className="menu-list">
                {navItems.map((item) => (
                    <NavLink key={item.name} className="menu-item" to={item.link}>
                        {item.name}
                    </NavLink>
                ))}
            </ul>
        </nav>
      )}
    </>
  );
};

export default Header;