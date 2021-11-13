import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const style = [
    {
        backgroundColor: '#12824C',
        color: 'white'
    },
    {
        backgroundColor: 'red',
        color: 'white'
    }
]
const Buttons = (props) => {
    let {increFunc, decreFunc} = props;
    return(
        <React.Fragment>
            <div className="buttons">
                <Button className="addBtn" onClick={increFunc} style={style[0]}><AddIcon /></Button>
                <Button className="minusBtn" onClick={decreFunc} style={style[1]}><RemoveIcon /></Button>
            </div>
        </React.Fragment>
    )
}

export default Buttons;