import React, { useState } from 'react';

const App = () => {
    const [info,setInfo] = useState({
        fname: "",
        lname: "",
        fullName: "",
        email: ""
    });
    const change = (event) => {
        const { name, value } = event.target;
        setInfo((preValue) => {
            return{
                ...preValue,
                [name]: value
            }
        });
    }
    const submit = (event) => {
        event.preventDefault();
        setInfo((preValue) => {
            return{
                fname: "",
                lname: "",
                fullName: preValue.fname + " " + preValue.lname,
                email: preValue.email
            }
        });
    }
    return(
        <React.Fragment>
            <div className="container">
                <h1>Hello!! <i>{info.fullName}</i></h1>
                <h3>{info.email}</h3>
                <form onSubmit={submit}>
                    <input type="text" name="fname" placeholder="Enter First Name" value={info.fname} onChange={change}/>
                    <input type="text" name="lname" placeholder="Enter Last Name" value={info.lname} onChange={change}/>
                    <input type="email" name="email" placeholder="Enter Email" value={info.email} onChange={change}/>
                    <button>Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default App;