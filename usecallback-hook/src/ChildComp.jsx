import React, { memo } from "react";

const ChildComp = ({childCount, addChildFunction}) => {
    console.log("Child Component Renders");
    return(
        <>
            <h1>Child Count : {childCount}</h1>
            <button onClick={addChildFunction}>Child Increment</button>
        </>
    )
}

export default memo(ChildComp)