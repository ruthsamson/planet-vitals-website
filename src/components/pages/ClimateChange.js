import React, { useEffect, useState } from "react";
import NASA from '../../images/climateChange-NASA.png';
import EPA from '../../images/climateChange-EPA.png';
import NOAA from '../../images/climateChange-NOAA.png';
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";




const ClimateChange = () => {

    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState([]);
    const [value, setValue] = useState(0);

    const fetchInfo = async () => {
        setInfo(climateChangeInfo)
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
                <title>Climate Change</title>
                <link rel="stylesheet" href="./css/ClimateChange.css"/>
            </Helmet>
            <div className="title">
                <h1>
                    <span>Climate</span>
                    <span className="dot"> · </span>
                    <span>Change</span>
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
                    {climateChangeInfo.map((item, index) => {
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

const climateChangeInfo = [
    {
        title: 'NASA',
        header: 'National Aeronautics and Space Administration (NASA)',
        details:'',
        url: 'https://climate.nasa.gov',
        img: NASA,
    },

    {
        title: 'EPA',
        header: 'United States Environmental Protection Agency (EPA)',
        details:'',
        url: 'https://www.epa.gov/climatechange-science',
        img: EPA,

    },
    {
        title: 'NOAA',
        header: 'National Oceanic and Atmospheric Administration (NOAA)',
        details:'',
        url: 'https://www.climate.gov/',
        img: NOAA,

    },
]

export default ClimateChange;