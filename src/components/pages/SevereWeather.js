import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri from '../../images/severeWeather-Esri.png'



const SevereWeather = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(severeWeatherInfo);
            setLoading(false);
        }
        useEffect
        (() => {
            fetchInfo();
        }, [])
    
        if(loading) {
            return (
                <section className="section loading">
                    <h1>Loading...</h1>
                </section>
            )
        }
    
        const{ title, header, url, img} = info[value]
        return (
            <section className="section">
                <Helmet>
                    <title>Severe Weather</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Severe</span>
                        <span className="dot"> · </span>
                        <span>Weather</span>
                        <div className="underline"></div>
                    </h1>
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
    
    const severeWeatherInfo = [
        {
            title: 'Esri',
            header: 'Esri U.S. Severe Weather',
            url: 'https://experience.arcgis.com/experience/7e5454f17e3144f69696ff7220a2edce/page/PIM/?views=Home',
            img: Esri,
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
    
    

export default SevereWeather;