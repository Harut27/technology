import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHome } from '@fortawesome/free-solid-svg-icons'


const NavbarLink = props => {
  const navbarManu = ["How To", "Phones", "TVs", "Laptops", "Photography"];

  return (
    <div className="navbar-link-container">
      <div className="links">
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
      <div className="navbar-link-pro">
        <span>Pro</span>
      </div>
    </div>
  );
};

export default NavbarLink;
