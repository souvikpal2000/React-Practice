import React from 'react';

const Form = (props) => {
    let {isOpen, values, onChangeFunc, onClickFunc, onSubmitEditFunc, onSubmitFunc, isClose, onCloseFunc} = props;
    return(
        <React.Fragment>
            <form method="POST" onSubmit={isOpen.edit? onSubmitEditFunc : onSubmitFunc}>
                {isOpen.active && <input name="title" placeholder='Title' value={values.title} onChange={onChangeFunc}/>}
                <input name="note" placeholder='Take Note...' value={values.note} onClick={onClickFunc} onChange={onChangeFunc}/>
                {(isOpen.active && <input type="submit" value={isOpen.btnValue} />)}
            </form>
            {(isClose && <input type="submit" value="Close" onClick={onCloseFunc}/>)}
        </React.Fragment>
    )
}

export default Form;