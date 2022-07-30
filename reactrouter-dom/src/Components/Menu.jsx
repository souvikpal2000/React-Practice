import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <React.Fragment>
            <div className='menus'>
                <NavLink exact to="/" activeClassName='active' id="link">Home</NavLink>
                <NavLink exact to="/user/souvik/pal" activeClassName='active' id="link">User</NavLink>
                <NavLink exact to="/contact" activeClassName='active' id="link">Contact</NavLink>
                <NavLink exact to="/about" activeClassName='active' id="link">About</NavLink>
            </div>
        </React.Fragment>
    )
}

export default Menu;