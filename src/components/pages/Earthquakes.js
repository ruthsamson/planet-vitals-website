import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import USGS from '../../images/earthquakes-USGS.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";

const Earthquakes = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(earthquakesInfo);

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
    
        const{ title, header, url, img} = info[value]
        return (
            <section className="section">
                <Helmet>
                    <title>Earthquakes</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Earthquakes.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Earthquakes</span>
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
                        {earthquakesInfo.map((item, index) => {
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
    
    const earthquakesInfo = [
        {
            title: 'USGS',
            header: 'United States Geological Survery (USGS)',
            url: 'https://earthquake.usgs.gov/earthquakes/map/?extent=-89.06687,-424.6875&extent=89.05535,413.4375',
            img: USGS,
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
    
    

export default Earthquakes;