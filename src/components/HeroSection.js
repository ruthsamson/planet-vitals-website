import React from 'react'
import EarthVideo from '../videos/earth.mp4';
import { Button, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider} from "react-helmet-async";


const HeroSection = () => {
  return (
    <HelmetProvider>
      <div className='hero-container'>
        <Helmet>
          <title>Home</title>
          <link rel="stylesheet" href="./css/HeroSection.css"/>
        </Helmet>
        <video autoPlay loop muted className='video'> 
            <source src={EarthVideo} type='video/mp4'/>
            Your browser does not support this video.
        </video>
        <Typography className='hero-title'>Our Planet</Typography>
        <div className='hero-btns'>
          <Link to='/vitals' className='link'>
            <Button  className='btn-vitals'
            variant="contained" 
            color='error' 
            size='large' 
            endIcon={<HealthAndSafetyIcon />} 
            >Vitals</Button>
          </Link>
        </div>
      </div>
    </HelmetProvider>
  )
}

export default HeroSection