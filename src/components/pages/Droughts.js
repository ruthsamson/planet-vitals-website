import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import UNL from '../../images/droughts-UNL.png'
import NOAA_2 from '../../images/droughts-NOAA.png'
import Loading from "../Loading";

const Droughts = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(droughtsInfo);
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
                    <title>Droughts</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Droughts.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Droughts</span>
                        <div className="underline"></div>
                    </h1>
                </div>
                <div className="website-nav">
                    <div className="btn-container">
                        {droughtsInfo.map((item, index) => {
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
    
    const droughtsInfo = [
        {
            title: 'U.S. Drought Monitor',
            header: 'The National Drought Mitigation Center',
            url: 'https://droughtmonitor.unl.edu/CurrentMap.aspx',
            img: UNL,
        },
    
        {
            title: 'NOAA',
            header: 'National Oceanic and Atmospheric Administration (NOAA)',
            url: 'https://www.climate.gov/maps-data/data-snapshots/data-source/drought-monitor',
            img: NOAA_2,
    
        },
        // {
        //     title: 'NOAA',
        //     header: 'National Oceanic and Atmospheric Administration (NOAA) ',
        //     url: 'https://www.climate.gov/',
        //     img: NOAA,
    
        // },
    ]
    
    

export default Droughts;