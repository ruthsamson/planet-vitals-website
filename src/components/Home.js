import React, { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import Loading from './Loading';

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect
    (() => {
        setTimeout(() => setLoading(false), 1000)
    }, [])

  
    if(loading) {
        return (
            <Loading />
        )
    }
  return (
    <div className='home'>
      <HeroSection />
    </div>
  )
}

export default Home;