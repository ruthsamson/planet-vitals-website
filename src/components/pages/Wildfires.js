import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import AirNow from '../../images/wildfires-AirNow.png'



const Wildfires = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(wildfiresInfo);
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
                    <title>Wildfires</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Wildfires.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Wildfires</span>
                        <div className="underline"></div>
                    </h1>
                </div>
                <div className="website-nav">
                    <div className="btn-container">
                        {wildfiresInfo.map((item, index) => {
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
    
    const wildfiresInfo = [
        {
            title: 'AirNow',
            header: 'Fire and Smoke Map',
            url: 'https://fire.airnow.gov/',
            img: AirNow,
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
    
    

export default Wildfires;