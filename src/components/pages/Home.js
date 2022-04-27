import { MenuOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import HeroSection from '../HeroSection';

const Home = () => {
  return (
    <div className='home'>
      <IconButton >
        <MenuOutlined />
      </IconButton>
      <HeroSection />
    </div>
  )
}

export default Home;