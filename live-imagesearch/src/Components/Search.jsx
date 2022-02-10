import React, { useState } from "react";

import Image from "./Image";

const Search = () => {
    const [text, setText] = useState("");
    const setInput = (event) => {
        const value = event.target.value;
        setText(value);
        console.log(value);
    }
    return(
        <>
            <div className="inputContainer">
                <input type="text" value={text} placeholder="Type Something" onChange={setInput}/>
            </div>
            <Image image={text} />
        </>
    )
}

export default Search;