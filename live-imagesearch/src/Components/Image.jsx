import React from "react";
import axios from "axios";

window.img = "";

const Image = (props) => {
    const {image} = props;
    const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU"; 
    const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${image}`;
    const random = Math.floor(Math.random()*10);
    (async function(){
        const res = await axios.get(fetchUrl);
        if((res.data.results).length !== 0){
            console.log(res.data.results[random].urls.small_s3);
            window.img = res.data.results[random].urls.small_s3;
        }
    })();
    
    return(
        <>
            <div className="imgContainer">
                {image !== "" ? <img src={window.img} alt={image} /> : null}
            </div>
        </>
    )
}

export default Image;