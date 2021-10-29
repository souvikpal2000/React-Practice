import React from 'react';
//import { add, sub, mul, div } from './calculation';
import * as calc from './calculation';

const calculator = () => {
    return (
        <React.Fragment>
            <ul>
                <li> Summation         : {calc.add(5,2)}</li>
                <li> Subraction        : {calc.sub(5,2)}</li>
                <li> Multiplication    : {calc.mul(5,2)}</li>
                <li> Division          : {calc.div(9,11)}</li>
            </ul>
        </React.Fragment>
    );
}

export default calculator;