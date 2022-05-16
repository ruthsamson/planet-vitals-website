import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Grid, ImageListItem, Box, } from '@mui/material'
import climateChange from '../../images/climate-change.jpeg'
import weather from '../../images/weather-check.jpeg'
import severeWeatherAlerts from '../../images/severe-weather.webp'
import worldData from '../../images/world-data.jpeg'
import wildfire from '../../images/wildfire.jpeg'
import airQuality from '../../images/air-quality.jpeg'
import earthquake from '../../images/earthquake.jpeg'
import volcano from '../../images/volcano.jpeg'
import drought from '../../images/drought.jpeg'
import flood from '../../images/flood.jpeg'
import storm from '../../images/storm.jpeg'
import landslide from '../../images/landslide.jpeg'
import Helmet from 'react-helmet'
import Loading from '../Loading'



const Vitals = () => {

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
    <div className='vitals'>
      <Helmet>
        <title>Vitals</title>
        <link rel="stylesheet" href="./css/Vitals.css"/>
      </Helmet>
      <h1 className='vitals-title'>Vitals</h1>
      <Box sx={{flexGrow: 1}}>
        <Grid className='grid' container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          {itemData.map((item, index) => (
            <Grid className='grid' item xs={4} sm={8} md={4} key={index}>
              <Link to={`/${item.path}`}>
                <ImageListItem className='content-wrapper' key={item.img}>
                  <div className='text-wrapper'>
                     <h4>{item.title}</h4>
                   </div>
                   <img
                   className='vitals-img'
                   src= {item.img}
                   alt={item.title}/>
                  </ImageListItem>
                </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  )
}



const itemData = [

  {
    img: climateChange,
    title: 'Climate Change',
    path: 'climatechange',
  },

  {
    img: worldData,
    title: 'Our World in Data',
    path: 'worlddata',
  },


  {
    img: weather,
    title: 'Local Weather',
    path: 'weather',
  },

  {
    img: severeWeatherAlerts,
    title: 'Severe Weather',
    path: 'severeweatheralerts',
  },

  {
    img: storm,
    title: 'Storms',
    path: 'storms',
  },
  
  {
    img: wildfire,
    title: 'Wildfires',
    path: 'wildfires',
  },

  {
    img: airQuality,
    title: 'Air Quality',
    path: 'airquality',
  },


  {
    img: volcano,
    title: 'Volcanoes',
    path: 'volcanoes',
  },

  {
    img: flood,
    title: 'Floods',
    path: 'floods',
  },

  {
    img: earthquake,
    title: 'Earthquakes',
    path: 'earthquakes',
  },
  
  {
    img: drought,
    title: 'Droughts',
    path: 'droughts',
  },

  {
    img: landslide,
    title: 'Landslides',
    path: 'landslides',
  },



]

export default Vitals