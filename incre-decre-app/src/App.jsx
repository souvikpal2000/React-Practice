import React, { useState } from 'react';
import Result from './Result';
import Buttons from './Buttons';

const App = () => {
  let [value,setValue] = useState(0);
  const incre = () => {
    setValue((preValue) => {
      return (preValue + 1)
    });
  }
  const decre = () => {
    if(value === 0){
      return alert("Decrement has reached its Limit");
    }
    setValue((preValue) => {
      return (preValue - 1)
    });
  }
  return(
    <React.Fragment>
      <div className="container">
        <Result value={value}/>
        <Buttons increFunc={incre} decreFunc={decre} />
      </div>
    </React.Fragment>
  )
}

export default App;