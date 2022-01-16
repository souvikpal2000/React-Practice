import React from 'react';

const Form = (props) => {
    let {isOpen, isEdit, values, onChangeFunc, onClickFunc, onSubmitEditFunc, onSubmitFunc} = props;
    return(
        <React.Fragment>
                <form method="POST" onSubmit={(isEdit && onSubmitEditFunc) || onSubmitFunc}>
                    {isOpen && <input name="title" placeholder='Title' value={values.title} onChange={onChangeFunc}/>}
                    <input name="note" placeholder='Take Note...' value={values.note} onClick={onClickFunc} onChange={onChangeFunc}/>
                    {(isOpen && isEdit && <input type="submit" value="Edit" />) || (isOpen && <input type="submit"/>)}
                </form>
        </React.Fragment>
    )
}

export default Form;