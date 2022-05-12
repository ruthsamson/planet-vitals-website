import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri_4 from '../../images/storms-Esri.png'
import Cyclocane from '../../images/storms-Cyclocane.png'
import StormerSite from '../../images/storms-StormerSite.png'
import NOAA_3 from '../../images/storms-NOAA.png'



const Storms = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(stormsInfo);
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
            header: 'Esri Hurricanes and Cyclones',
            url: 'https://www.esri.com/en-us/disaster-response/disasters/hurricanes',
            img: Esri_4,
        },
        {
            title: 'Cyclocane',
            header: 'International Hurricane/Cyclone/Typhoon Tracking Map',
            url: 'https://www.cyclocane.com/',
            img: Cyclocane,
        },
        {
            title: 'StormerSite',
            header: 'Hail, Wind, and Tornado Reports',
            url: 'https://www.stormersite.com/hailmap',
            img: StormerSite,
        },
        {
            title: 'NOAA',
            header: 'National Oceanic and Atmospheric Administration (NOAA)',
            url: 'https://www.ncei.noaa.gov/access/monitoring/daily-snow/',
            img: NOAA_3,
        },
    ]
    
    

export default Storms;