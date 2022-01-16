import React from 'react';

const NoteCard = (props) => {
    let {id, editFunc, onClickFunc, dataValues} = props;
    return(
        <React.Fragment>
                <div className="item">
                    <p id={id} className="edit" onClick={editFunc}>✏️</p>
                    <p id={id} className='cross' onClick={onClickFunc}>❌</p>
                    <p>{dataValues.title + " " + dataValues.note}</p>
                </div>
        </React.Fragment>
    )
}

export default NoteCard;