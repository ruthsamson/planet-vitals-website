import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Esri_3 from '../../images/floods-Esri.png'
import FEMA from '../../images/floods-FEMA.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";

const Floods = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(floodsInfo);
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
                    <title>Floods</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Floods.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Floods</span>
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
                        {floodsInfo.map((item, index) => {
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
    
    const floodsInfo = [
        {
            title: 'Esri',
            header: 'Flooding Map',
            details: 'Map · Flash Flood Warnings · Live Stream Gauges',
            url: 'https://www.esri.com/en-us/disaster-response/disasters/flooding',
            img: Esri_3,
        },
        {
            title: 'FEMA',
            header: 'National Flood Hazard Layer Viewer',
            details: 'Map · Flood Hazard Layer',
            url: 'https://hazards-fema.maps.arcgis.com/apps/webappviewer/index.html?id=8b0adb51996444d4879338b5529aa9cd',
            img: FEMA,
        },
    ]
    
    

export default Floods;