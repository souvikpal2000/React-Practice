import React from 'react';
import { add, sub, mul, div } from './calculation';

const calculator = () => {
    return (
        <React.Fragment>
            <ul>
                <li> Summation         : {add(5,2)}</li>
                <li> Subraction        : {sub(5,2)}</li>
                <li> Multiplication    : {mul(5,2)}</li>
                <li> Division          : {div(9,11)}</li>
            </ul>
        </React.Fragment>
    );
}

export default calculator;