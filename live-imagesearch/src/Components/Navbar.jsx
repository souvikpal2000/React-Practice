import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <div className="navContainer">
                <NavLink to="/" id="menu" activeClassName="active" exact>Home</NavLink>
                <NavLink to="/search" id="menu" activeClassName="active" exact>Search</NavLink>
                <NavLink to="/about" id="menu" activeClassName="active" exact>About</NavLink>
                <NavLink to="/contact" id="menu" activeClassName="active" exact>Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar;