import React from "react";
import { useReducer } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

const initialValue = 0;
const reducer = (state, action) => {
    if(action.btnType === "INCREMENT"){
        return state+1;
    }
    else if(action.btnType === "DECREMENT"){
        return state-1;
    }
}
const App02 = () => {
    const [state, dispatch] = useReducer(reducer, initialValue);
    
    const incre = () => {
        dispatch({btnType: "INCREMENT"});
    }
    const decre = () => {
        if(state === 0){
            return alert("Decrement has reached its Limit");
        }
        dispatch({btnType: "DECREMENT"});
    }

    return (
        <>
            <div className="container">
                <Result value={state}/>
                <Buttons increFunc={incre} decreFunc={decre} />
            </div>
        </>
    )
}

export default App02;