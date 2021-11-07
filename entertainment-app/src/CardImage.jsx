import React from 'react';

function CardImage(props){
    return(
        <React.Fragment>
            <img src={props.image} alt="poster"/>
        </React.Fragment>
    );
}

export default CardImage;