import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const NavbarLink = props => {
  const navbarManu = ["Reviews", "How To", "Phones", "TVs", "Laptops", "Photography", "Deals"];

  return (
    <div className="navbar-link-container">
      {navbarManu.map((navbarMenuLink, index) => {
        return (
          <div
            className={`navbar-link navbar-${navbarMenuLink.toLowerCase().replace(/\s/g, '')}`}
            key={index}
          >
            <Link to={`/${navbarMenuLink.toLowerCase()}`}>
              {navbarMenuLink}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavbarLink;
