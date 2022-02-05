import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    return(
        <React.Fragment>
            <h1>Hello, {fname} {lname}</h1>
        </React.Fragment>
    )
}

export default User;