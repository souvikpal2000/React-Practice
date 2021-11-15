import React from 'react';
import {Questions} from './Questions';
import Accordion from './Accordion';

const App = () => {
    return(
        <React.Fragment>
            <div className="container">
                <h1>Accordion Example</h1>
                <div className="accordion">
                    {Questions.map((value) => {
                        const {id} = value;
                        return <Accordion key={id} {...value} />
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;