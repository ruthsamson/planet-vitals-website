import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import NOAA_2 from '../../images/droughts-NOAA.png'
import UNL from '../../images/droughts-UNL.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";

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
    
    const droughtsInfo = [
        {
            title: 'NOAA',
            header: 'National Integrated Drought Information System (NIDIS)',
            details: 'Maps · Precipitation Data · Temperature Conditions · Severity Index · Drought Index ',
            url: 'https://www.drought.gov/current-conditions',
            img: NOAA_2,
        },
    
        {
            title: 'NADM',
            header: 'North America Drought Monitor',
            details: 'Maps · Historical Data Comparisons · Intensity Levels · Time Series',
            url: 'https://droughtmonitor.unl.edu/CurrentMap.aspx',
            img: UNL,
    
        },
    ]
    
    

export default Droughts;