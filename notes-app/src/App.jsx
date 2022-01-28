import React, { useState } from 'react';
import Form from './components/Form';
import NoteCard from './components/NoteCard';

const App = () => {
    let [open, setOpen] = useState({
        active: false,
        btnValue: "",
        edit: false
    });
    let [close, setClose] = useState(false);
    const closeFunc = () => {
        setOpen({
            active: false,
            btnValue: "",
            edit: false
        })
        setInput({
            title: "",
            note: ""
        })
        setClose(false);
        setEditBtn(false);
    }
    let [editBtn, setEditBtn] = useState(false);

    const expand = () => {
        if(editBtn){
            setOpen({
                active: true,
                btnValue: "Edit",
                edit: true
            });
            setClose(true);
        }
        else{
            setOpen({
                active: true,
                btnValue: "Submit",
                edit: false
            });
            setClose(true);
        }
    }

    let [input, setInput] = useState({
        title: "",
        note: ""
    })
    const change = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setInput((preValue) => {
            return{
                ...preValue,
                [name]: value
            }
        })
    }

    let [notes, setNotes] = useState([]);
    const submitNote = (event) => {
        event.preventDefault();
        setNotes((preValues) => {
            return[
                ...preValues,
                input
            ]
        });
        setInput({
            title: "",
            note: ""
        })
    }

    const remove = (event) => {
        let id = parseInt(event.target.id);
        setNotes((preValues) => {
            return(
                preValues.filter((note, index) => {
                    return(index !== id);
                })
            )
        })
    }

    let [id, setId] = useState();
    const edit = (event) => {
        setEditBtn(true);
        setOpen({
            active: true,
            btnValue: "Edit",
            edit: true
        });
        setId(event.target.id);
        const id = event.target.id;
        setInput({
            title: notes[id].title,
            note: notes[id].note
        });
        setClose(true);

    }
    const editNote = (event) => {
        event.preventDefault();
        let newArr = [...notes];
        newArr[id] = input;
        setNotes(newArr);
        setInput({
            title: "",
            note: ""
        });
        setEditBtn(false);
        setOpen({
            active: true,
            btnValue: "Submit",
            edit: false
        });
    }

    return(
        <React.Fragment>
            <div className="form">
                <Form isOpen={open} values={input} onChangeFunc={change} onClickFunc={expand} onSubmitEditFunc={editNote} onSubmitFunc={submitNote} isClose={close} onCloseFunc={closeFunc}/>
            </div>
            <div className='notes'>
                {
                    notes.map((data, index) => {
                        return(
                            <NoteCard key={index} id={index} editFunc={edit} onClickFunc={remove} dataValues={data}/>
                        ); 
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default App;