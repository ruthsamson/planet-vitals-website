import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import NASA_3 from '../../images/landslides-NASA.png'
import USGS from '../../images/landslides-USGS.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";


const Landslides = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(landslidesInfo);
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
                    <title>Landslides</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Landslides.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Landslides</span>
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
                        {landslidesInfo.map((item, index) => {
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
    
    const landslidesInfo = [
        {
            title: 'NASA',
            header: 'NASA Landslide Viewer',
            details: 'Map · Historical Landslide Data · Trigger and Event Description',
            url: 'https://maps.nccs.nasa.gov/arcgis/apps/webappviewer/index.html?id=824ea5864ec8423fb985b33ee6bc05b7',
            img: NASA_3,
        },
        {
            title: 'USGS',
            header: 'U.S. Landslide Inventory',
            details: 'Map · Historical Landslide Data',
            url: 'https://usgs.maps.arcgis.com/apps/webappviewer/index.html?id=ae120962f459434b8c904b456c82669d',
            img: USGS,
        },
    ]
    
    

export default Landslides;