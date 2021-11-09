import React, { useState } from 'react';

const App = () => {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [fullname,setFullName] = useState("");
    const firstChange = (event) => {
        setFirstName(event.target.value);
    }
    const lastChange = (event) => {
        setLastName(event.target.value);
    }
    const submit = (event) => {
        event.preventDefault();
        setFullName(firstName + " " + lastName);
    }
    return(
        <React.Fragment>
            <div className="container">
                <h1>Hello!! <i>{fullname}</i></h1>
                <form onSubmit={submit}>
                    <input type="text" placeholder="Enter First Name" value={firstName} onChange={firstChange}/>
                    <input type="text" placeholder="Enter Last Name" value={lastName} onChange={lastChange}/>
                    <button>Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default App;