import React, { useState } from "react";
import axios from "axios";

const Image = (props) => {
    const {image, random} = props;
    const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU"; 
    const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${image}`;
    let [img, setImg] = useState("");
    (async function(){
        const res = await axios.get(fetchUrl);
        if((res.data.results).length !== 0){  
            const url = res.data.results[random].urls.small_s3;
            setImg(url);
        }
    })();
    
    return(
        <>
            <div className="imgContainer">
                {image !== "" ? <img src={img} alt={image} /> : null}
            </div>
        </>
    )
}

export default Image;