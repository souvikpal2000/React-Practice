import React, { useCallback, useState } from "react";
import ChildComp from "./ChildComp";

const App = () => {
  console.log("Parent Component Renders");
  const [count, setCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  
  const increment = () => {
    setCount((preValue) => {
      return preValue+1;
    })
  }
  const addChildFunc = useCallback(() => {
    setChildCount((preValue) => {
      return preValue+1;
    })
  }, [childCount])

  return(
    <>
      <h1>Normal Count : {count}</h1>
      <button onClick={increment}>Increment</button>

      <ChildComp childCount={childCount} addChildFunction={addChildFunc}/>
    </>
  )
}

export default App;