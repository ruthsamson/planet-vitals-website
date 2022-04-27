import React from "react";
import './Page.css'



const ClimateChange = () => {

    function handleClick() {
        window.open('https://climate.nasa.gov/', '_blank');
       
    }

    return (
        <div>
            <h1 onClick={handleClick}>Click me</h1>
        </div>
    )
}

export default ClimateChange;