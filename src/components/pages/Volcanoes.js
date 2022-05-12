import React, { useEffect, useState } from "react";
import { IconButton, ImageListItem, ImageListItemBar } from "@mui/material";
import Helmet from "react-helmet";
import Map from '../../images/volcanoes-Map.png'
import Smithsonian from '../../images/volcanoes-Smithsonian.png'



const Volcanoes = () => {
        const [loading, setLoading] = useState(true);
        const [info, setInfo] = useState([]);
        const [value, setValue] = useState(0);
    
        const fetchInfo = async () => {
            setInfo(volcanoesInfo);
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
                    <title>Volcanoes</title>
                    <link rel="stylesheet" href="./css/ClimateChange.css"/>
                    <link rel="stylesheet" href="./css/Volcanoes.css"/>
                </Helmet>
                <div className="title">
                    <h1>
                        <span>Volcanoes</span>
                        <div className="underline"></div>
                    </h1>
                </div>
                <div className="website-nav">
                    <div className="btn-container">
                        {volcanoesInfo.map((item, index) => {
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
    
    const volcanoesInfo = [
        {
            title: 'Data Map',
            header: 'Volcanoes and Earthquakes Data Map',
            url: 'https://www.volcanoesandearthquakes.com/',
            img: Map,
        },
        {
            title: 'Smithsonian',
            header: 'Smithsonian Global Volcanism Program',
            url: 'https://volcano.si.edu/gvp_currenteruptions.cfm',
            img: Smithsonian,
    
        },
        // {
        //     title: 'NOAA',
        //     header: 'National Oceanic and Atmospheric Administration (NOAA) ',
        //     url: 'https://www.climate.gov/',
        //     img: NOAA,
    
        // },
    ]
    
    

export default Volcanoes;