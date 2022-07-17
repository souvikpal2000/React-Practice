import React from 'react';
import { firstName, lastName } from './App';

const CompoC = () => {
    return(
        <React.Fragment>
            <firstName.Consumer>
                {(fname) => {
                    return(
                        <lastName.Consumer>
                            {(lname) => {
                                return <h1>My name is {fname} {lname} = With the help of Producer & Consumer</h1>
                            }}
                        </lastName.Consumer>
                    )
                }}
            </firstName.Consumer>
        </React.Fragment>
    );
}

export default CompoC;