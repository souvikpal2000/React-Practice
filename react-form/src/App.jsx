import React, { useState } from 'react';

const App = () => {
    const [name,setName] = useState({
        fname: "",
        lname: "",
        fullName: "",
    });
    const change = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setName((preValue) => {
            return{
                ...preValue,
                [name]: value
            }
        });
/*         if(name === "first"){
            setName((preValue) => {
                return{
                    fname: value,
                    lname: preValue.lname,
                    fullName: preValue.fullName
                }
            });
        }
        else if(name === "last"){
            setName((preValue) => {
                return{
                    fname: preValue.fname,
                    lname: value,
                    fullName: preValue.fullName
                }
            });
        } */
    }
    const submit = (event) => {
        event.preventDefault();
        setName((preValue) => {
            return{
                fname: "",
                lname: "",
                fullName: preValue.fname + " " + preValue.lname
            }
        });
    }
    return(
        <React.Fragment>
            <div className="container">
                <h1>Hello!! <i>{name.fullName}</i></h1>
                <form onSubmit={submit}>
                    <input type="text" name="fname" placeholder="Enter First Name" value={name.fname} onChange={change}/>
                    <input type="text" name="lname" placeholder="Enter Last Name" value={name.lname} onChange={change}/>
                    <button>Submit</button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default App;