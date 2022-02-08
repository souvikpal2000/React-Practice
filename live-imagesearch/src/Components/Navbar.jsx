import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <div className="navContainer">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Search">Search</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </>
    )
}

export default Navbar;