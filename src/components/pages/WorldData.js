import React, { useEffect, useState } from "react";
import { Button, IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import { Helmet, HelmetProvider} from "react-helmet-async";
import GCDL from '../../images/worldData-GCDL.png'
import NASA_2 from '../../images/worldData-NASA.png'
import Loading from "../Loading";
import { ArrowBack } from "@mui/icons-material";



const WorldData = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(worldDataInfo);
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
            <HelmetProvider>
                <section className="section">
                    <Helmet>
                        <title>World Data</title>
                        <link rel="stylesheet" href="./css/ClimateChange.css"/>
                        <link rel="stylesheet" href="./css/WorldData.css"/>
                    </Helmet>
                    <div className="title">
                        <h1>
                            <span>World</span>
                            <span className="dot"> · </span>
                            <span>Data</span>
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
                                                <input type='button' className="btn" value='Go to Site' />
                                            </a>
                                        </IconButton>
                                    }
                                    actionPosition="right"
                                />
                            </ImageListItem>
                        </article>
                    </div>
                </section>
            </HelmetProvider>
        )
    }
    
    const worldDataInfo = [
        {
            title: 'Global Change Data Lab',
            header: 'Our World In Data',
            details: 'Pollution · Impact Reports · Energy · Fossil Fuels · Biodiversity',
            url: 'https://ourworldindata.org/',
            img: GCDL,
        },
        {
            title: 'NASA',
            header: 'Eyes on the Earth',
            details: 'Satellites Now · Air Temperature · Soil Moisture · Ozone · Gravity Field',
            url: 'https://climate.nasa.gov/earth-now/#/vitalsign?vitalsign=satellites&altid=0&animating=f&start=&end=',
            img: NASA_2,
    
        },
    ]
    
    

export default WorldData;