import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return(
        <>
            <div className="container">
                <h1>404 Error Page</h1>
                <h3>Sorry, this page doesn't exist</h3>
                <NavLink to="/" className="goBack">Go Back</NavLink>
            </div>
        </>
    )
}

export default Error;