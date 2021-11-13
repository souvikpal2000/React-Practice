import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Buttons = (props) => {
    let {increFunc, decreFunc} = props;
    return(
        <React.Fragment>
            <div className="buttons">
                <Button className="addBtn" onClick={increFunc}><AddIcon className="icon"/></Button>
                <Button className="minusBtn" onClick={decreFunc}><RemoveIcon className="icon"/></Button>
            </div>
        </React.Fragment>
    )
}

export default Buttons;