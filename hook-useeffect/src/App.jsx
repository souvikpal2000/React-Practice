import React, { useEffect, useState } from "react";

const App = () => {
    let [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Clicked me ${count}`;
    })
    return(
        <React.Fragment>
            <button onClick={() => {
                setCount(count+1);
            }}>
                Click Me {count}
            </button>
        </React.Fragment>
    )
}

export default App;