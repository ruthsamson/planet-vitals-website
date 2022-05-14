import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import { LineAxisOutlined } from "@mui/icons-material";



const Weather = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cd7ab58f7d8981b0724f61e30f8175de`
    

   const getData = async () => {
       const response = await fetch(url);
       const newData = await response.json();
       setData(newData);
       console.log(newData)
       setLocation('');
   }

const handleClick = (e) => {
    setLocation(e.target.value);
    getData();
    
}

        return (
            <div className="weather">
                <Helmet>
                    <title>Weather Forecast</title>
                    <link rel="stylesheet" href="./css/Weather.css"/>
                </Helmet>
                <div className="search">
                    <input
                        value={location}
                        placeholder= 'Enter Location'
                        type='text'                   
                    />
                    <button 
                        className="btn"
                        onClick={handleClick}
                    >
                        Enter
                    </button>
                </div>
                <div className="container">
                    <div className="top">
                        <div className="location">
                            <p>Shuzenji</p>
                        </div>
                        <div className="temperature">
                            <h1>60°F</h1>
                        </div>
                        <div className="description">
                            <p>Cloudy</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="feels-like">
                            <p className="bold">65°F</p>
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            <p className="bold">20%</p>
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            <p className="bold">12 MPH</p>
                            <p>Winds</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    

export default Weather;