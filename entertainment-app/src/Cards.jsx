import React from 'react';

function Card(props){
    return(
        <React.Fragment>
            <div className="cardOuter">
                <div className="card">
                    <img src={props.image} alt="poster"/>
                    <div className="cardInfo">
                        <p className="cardCategory">{props.category}</p>
                        <p className="cardTitle">{props.title}</p>
                        <div className="cardButton">
                            <a href={props.link} target="_blank" rel="noreferrer">Watch Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Card;