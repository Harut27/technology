import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faSearch } from '@fortawesome/free-solid-svg-icons'


const NavbarLink = props => {
  const navbarManu = ["How To", "Phones", "TVs", "Laptops", "Photography", "Contact Us"];

  return (
    <div className="navbar-link-container">
      <div className="centered navbar-link-wrapper">
        <div className="home-icon">
        <Link to="/">
          <FontAwesomeIcon icon={faHome}/>
          </Link>
        </div>
        <div className="links">
          {navbarManu.map((navbarMenuLink, index) => {
            return (
              <div
                className={`navbar-link navbar-${navbarMenuLink.toLowerCase().replace(/\s/g, '')}`}
                key={index}
              >
                <Link to={`/${navbarMenuLink.toLowerCase().replace(/\s/g, '')}`}>
                  {navbarMenuLink}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="navbar-search">
            <span className="burgerbar-search-text">Search</span>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
      </div>
    </div>
  );
};

export default NavbarLink;
