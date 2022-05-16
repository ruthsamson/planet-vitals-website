import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri_2 from '../../images/airQuality-Esri.png'
import AirNow from '../../images/airQuality-AirNow.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";


const AirQuality = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(airQualityInfo);
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
            <section className="section">
                <Helmet>
                    <title>Air Quality</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/AirQuality.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Air</span>
                        <span className="dot"> · </span>
                        <span>Quality</span>
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
                        {airQualityInfo.map((item, index) => {
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
                                            <button type="button" className="btn">
                                                Go to Site
                                            </button>
                                        </a>
                                    </IconButton>
                                }
                                actionPosition="right"
                            />
                        </ImageListItem>
                    </article>
                </div>
            </section>
        )
    }
    
    const airQualityInfo = [
        {
            title: 'Esri',
            header: 'Air Quality Aware',
            details: 'Air Quality Index · Wind Speed · Population Affected · Workers at Risk',
            url: 'https://livingatlas.arcgis.com/airquality/#@=-102.794,42.267,5',
            img: Esri_2,
        },
        {
            title: 'AirNow',
            header: 'AirNow Tracker',
            details: 'Air Quality Index · Air Quality Forecast · Pollutant Levels by Type',
            url: 'https://www.airnow.gov/',
            img: AirNow,
    
        }
    ]
    
    

export default AirQuality;