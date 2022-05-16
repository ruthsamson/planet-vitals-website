import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { Helmet, HelmetProvider} from "react-helmet-async";
import Esri from '../../images/severeWeather-Esri.png'
import NOAA from '../../images/severeWeather-NOAA.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";



const SevereWeather = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(severeWeatherInfo);
        }
       
        useEffect
        (() => {
            fetchInfo();
            setTimeout(() => setLoading(false), 1000)
        }, [])
      
        const handleClick = () => {
            window.history.back();
        }

        if(loading) {
            return (
                <Loading />
            )
        }
    
        const{ title, header, details, url, img} = info[value]
        return (
            <HelmetProvider>
                <section className="section">
                    <Helmet>
                        <title>Severe Weather</title>
                        <link rel="stylesheet" href="./css/ClimateChange.css"/>
                        <link rel="stylesheet" href="./css/SevereWeather.css"/>
                    </Helmet>
                    <div className="title">
                        <h1>
                            <span>Severe</span>
                            <span className="dot"> · </span>
                            <span>Weather</span>
                            <div className="underline"></div>
                        </h1>
                    </div>
                    <div className="back">
                        <Button  className='btn-vitals'
                        onClick={handleClick}
                        variant="text" 
                        size='large' 
                        startIcon={<ArrowBack />} 
                        >
                            Go back to Vitals
                        </Button>            
                    </div>
                    <div className="website-nav">
                        <div className="btn-container">
                            {severeWeatherInfo.map((item, index) => {
                                return (
                                    <button
                                    key={item.title}
                                    onClick={() => setValue(index)}
                                    className={`website-btn ${index === value && 'active-btn'}`}
                                    >
                                    {item.title}
                                    </button>
                                )
                            })}
                        </div>
                        <article className="website-info">
                            <h3 className="website-header">{header}</h3>
                            <p className="details">{details}</p>
                            <ImageListItem>
                                <img className='website-image' src={img} alt='Website homepage'/>
                                <ImageListItemBar
                                    title={title}
                                    position="bottom"
                                    actionIcon={
                                        <IconButton
                                            aria-label={`go to ${title} website`}
                                        >
                                            <a href={url} target='_blank' rel="noreferrer">
                                                <input type='button' className="btn" value='Go to Site' />
                                            </a>
                                        </IconButton>
                                    }
                                    actionPosition="right"
                                />
                            </ImageListItem>
                        </article>
                    </div>
                </section>
            </HelmetProvider>
        )
    }
    
    const severeWeatherInfo = [
        {
            title: 'Esri',
            header: 'U.S. Severe Weather Tracker',
            details: 'Map · Weather Watches and Warnings · Event Reports',
            url: 'https://experience.arcgis.com/experience/7e5454f17e3144f69696ff7220a2edce/page/PIM/?views=Home',
            img: Esri,
        },
        {
            title: 'NOAA',
            header: "NOAA's Severe Weather Data Inventory",
            details: 'Map · Historical Events Database',
            url: 'https://www.ncei.noaa.gov/maps/swdi/',
            img: NOAA,
        },
     
    ]
    
    

export default SevereWeather;