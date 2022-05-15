import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri_2 from '../../images/airQuality-Esri.png'
import Loading from "../Loading";


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
    
      
        if(loading) {
            return (
                <Loading />
            )
        }
    
        const{ title, header, url, img} = info[value]
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
            url: 'https://livingatlas.arcgis.com/airquality/#@=-102.794,42.267,5',
            img: Esri_2,
        },
        // {
        //     title: 'EPA',
        //     header: 'United States Environmental Protection Agency (EPA)',
        //     url: 'https://www.epa.gov/climatechange-science',
        //     img: EPA,
    
        // },
        // {
        //     title: 'NOAA',
        //     header: 'National Oceanic and Atmospheric Administration (NOAA) ',
        //     url: 'https://www.climate.gov/',
        //     img: NOAA,

        // },
    ]
    
    

export default AirQuality;