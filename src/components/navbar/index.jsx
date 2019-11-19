import React from "react";
import NavbarLink from "./navbar-link";
import Burgerbar from "./burgerbar";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <Burgerbar/>
            <NavbarLink/>
        </div>
    )
}

export default Navbar; 