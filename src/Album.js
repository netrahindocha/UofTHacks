import React from "react";

const Album = (props) => {

    console.log(props);
    
    return (
        <>
        <div className="albumWrap">
            <h1 id="albumTitle">Your Memories</h1>
            <p id="albumSlogan">Your memories saved!</p>
        </div>
        
        <div className="albumSection">
            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        </div>
        </>
    )
}

export default Album;