import React from 'react';

function CardTitle(props){
    return(
        <React.Fragment>
            <p className="cardTitle">{props.title}</p>
        </React.Fragment>
    );
}

export default CardTitle;