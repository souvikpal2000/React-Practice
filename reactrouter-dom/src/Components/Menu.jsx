import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <React.Fragment>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <a href="/">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a> */}
        </React.Fragment>
    )
}

export default Menu;