import React, { useEffect, useState } from "react";

const App = () => {
    let [titleCount, setTitleCount] = useState(0);
    let [headingCount, setHeadingCount] = useState(0); 

    const increTitleCount = () => {
        setTitleCount(titleCount+1);
    }
    useEffect(() => {
        document.title = `Clicked me ${titleCount}`;
    }, [titleCount]);

    const increHeadingCount = () => {
        setHeadingCount(headingCount+1);
    }
    useEffect(() => {
        alert(`Heading Count = ${headingCount}`);
    }, [headingCount]);

    return(
        <React.Fragment>
            <h1>{headingCount}</h1>
            <button onClick={increTitleCount}>Click Me {titleCount} </button>
            <button onClick={increHeadingCount}>Click Me {headingCount}</button>
        </React.Fragment>
    )
}

export default App;