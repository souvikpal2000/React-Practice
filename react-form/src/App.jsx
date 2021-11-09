import React, { useState } from 'react';

const App = () => {
    const [name,setName] = useState("");
    const [fullname,setFullName] = useState("");
    const nameChange = (event) => {
        setName(event.target.value);
    }
    const submit = () => {
        setFullName(name);
    }
    return(
        <React.Fragment>
            <div className="container">
                <h1>Hello!! <i>{fullname}</i></h1>
                <input type="text" placeholder="Enter your Name" value={name} onChange={nameChange}/>
                <button onClick={submit}>Submit</button>
            </div>
        </React.Fragment>
    );
}

export default App;