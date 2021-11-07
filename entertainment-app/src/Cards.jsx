import React from 'react';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

function Card(props){
    return(
        <React.Fragment>
            <div className="cardOuter">
                <div className="card">
                    <CardImage image={props.image}/>
                    <div className="cardInfo">
                        <p className="cardCategory">{props.category}</p>
                        <CardTitle title={props.title} />
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