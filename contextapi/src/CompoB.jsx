import React, { useContext } from 'react';
import { firstName, lastName } from './App';
import CompoC from './CompoC';

const CompoB = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName);
    return(
        <React.Fragment>
            <CompoC />
            <h1>My name is {fname} {lname} = With the help of useContext Hook</h1>
        </React.Fragment>
    );
}

export default CompoB;