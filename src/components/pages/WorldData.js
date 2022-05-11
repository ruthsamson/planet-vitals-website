import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import GCDL from '../../images/worldData-GCDL.png'
import NASA_2 from '../../images/worldData-NASA.png'



const WorldData = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(worldDataInfo);
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
                    <title>World Data</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>World</span>
                        <span className="dot"> · </span>
                        <span>Data</span>
                        <div className="underline"></div>
                    </h1>
                </div>
                <div className="website-nav">
                    <div className="btn-container">
                        {worldDataInfo.map((item, index) => {
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
    
    const worldDataInfo = [
        {
            title: 'Global Change Data Lab',
            header: 'Our World In Data',
            url: 'https://ourworldindata.org/',
            img: GCDL,
        },
        {
            title: 'NASA',
            header: 'National Aeronautics and Space Administration (NASA)',
            url: 'https://climate.nasa.gov/earth-now/#/vitalsign?vitalsign=satellites&altid=0&animating=f&start=&end=',
            img: NASA_2,
    
        },
        // {
        //     title: 'NOAA',
        //     header: 'National Oceanic and Atmospheric Administration (NOAA) ',
        //     url: 'https://www.climate.gov/',
        //     img: NOAA,
    
        // },
    ]
    
    

export default WorldData;