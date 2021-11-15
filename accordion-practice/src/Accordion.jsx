import React, { useState } from 'react';

const Accordion = (props) => {
    let {question,answer} = props;
    let [show,setShow] = useState(false);
    const showAnswer = () => {
        setShow(!show);
    }
    return(
        <React.Fragment>
            <div className="questionAnswer">
                <div className="questionContainer">
                    <p className="button" onClick={showAnswer}>{show===false? "➕" : "➖"}</p>
                    <h3>{question}</h3>
                </div>
                {show===true && <p className="answer">{answer}</p>}
            </div>
            
        </React.Fragment>
    );  
}

export default Accordion;