import React from 'react'
import './HeroSection.css'
import EarthVideo from '../videos/earth.mp4';
import { Button, Typography } from '@mui/material';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video autoPlay loop muted className='video'> 
            <source src={EarthVideo} type='video/mp4'/>
            Your browser does not support HTML5 video.
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
          <Link to='/sustainability' className='link'>
            <Button className='btn-help'
            variant="contained" 
            color='primary' 
            size='large' 
            endIcon={<HealthAndSafetyIcon />} 
            >Sustainability</Button>
          </Link>
        </div>
    </div>
  )
}

export default HeroSection