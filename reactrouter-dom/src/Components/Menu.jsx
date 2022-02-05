import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <React.Fragment>
            <div className='menus'>
                <NavLink to="/" activeClassName='active' id="link" exact>Home</NavLink>
                <NavLink to="/user/souvik/pal" activeClassName='active' id="link" exact>User</NavLink>
                <NavLink to="/contact" activeClassName='active' id="link" exact>Contact</NavLink>
                <NavLink to="/about" activeClassName='active' id="link" exact>About</NavLink>
                {/* <a href="/">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a> */}
            </div>
        </React.Fragment>
    )
}

export default Menu;