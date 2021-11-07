import React from 'react';

function Slot(props){
    let {x,y,z} = props;
    if(x===y && y===z){
        return(
            <React.Fragment>
                <div className="slotInner">
                <h1 className="emojies">{x} {y} {z}</h1>
                    <h1 className="result">This is Matching</h1>
                </div>
                <hr />
            </React.Fragment>
        );
    }
    else{
        return(
            <React.Fragment>
                <div className="slotInner">
                    <h1 className="emojies">{x} {y} {z}</h1>
                    <h1 className="result">This is not Matching</h1>
                </div>
                <hr />
            </React.Fragment>
        );
    }
}

export default Slot;