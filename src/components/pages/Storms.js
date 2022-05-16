import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri_4 from '../../images/storms-Esri.png'
import Cyclocane from '../../images/storms-Cyclocane.png'
import StormerSite from '../../images/storms-StormerSite.png'
import NOAA_3 from '../../images/storms-NOAA.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";



const Storms = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(stormsInfo);
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
                    <title>Storms</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Storms.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Storms</span>
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
                        {stormsInfo.map((item, index) => {
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
    
    const stormsInfo = [
        {
            title: 'Esri',
            header: 'Hurricanes and Cyclones Tracker',
            details: 'Map · Watches and Warnings · Development Label · Storm Type',
            url: 'https://www.esri.com/en-us/disaster-response/disasters/hurricanes',
            img: Esri_4,
        },
        {
            title: 'Cyclocane',
            header: 'International Hurricane/Cyclone/Typhoon Tracking Map',
            details: 'Map · Season Data · Warnings',
            url: 'https://www.cyclocane.com/',
            img: Cyclocane,
        },
        {
            title: 'StormerSite',
            header: 'Hail, Wind, and Tornado Reports',
            details: 'Map · Event Reports',
            url: 'https://www.stormersite.com/hailmap',
            img: StormerSite,
        },
        {
            title: 'NOAA',
            header: 'Daily U.S. Snowfall and Snow Depth Tracker',
            details: 'Map · Historical Database · Event Reports',
            url: 'https://www.ncei.noaa.gov/access/monitoring/daily-snow/',
            img: NOAA_3,
        },
    ]
    
    

export default Storms;