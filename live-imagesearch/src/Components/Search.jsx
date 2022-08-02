import React, { useState } from "react";

import Image from "./Image";

const Search = () => {
    const [data, setData] = useState({
        text: "",
        random: 0
    });
    const setInput = (event) => {
        const value = event.target.value;
        const random = Math.floor(Math.random()*10);
        setData({
            text: value,
            random: random
        });
    }
    return(
        <>
            <div className="inputContainer">
                <input type="text" value={data.text} placeholder="Type Something" onChange={setInput}/>
            </div>
            <Image {...data} />
        </>
    )
}

export default Search;