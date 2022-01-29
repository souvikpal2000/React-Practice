import React, { useContext } from "react";
import { firstName, lastName } from "./App";

const CompoC = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return(
        <React.Fragment>
            <h1>My Name is {fname} {lname}</h1>
        </React.Fragment>
    )
}

export default CompoC;