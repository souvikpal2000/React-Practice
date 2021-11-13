import React from 'react';

const Result = (props) => {
    let {value} = props
    return(
        <React.Fragment>
            <div className="heading">  
                <h1 className="result">{value}</h1>
            </div>

        </React.Fragment>
    )
}

export default Result;