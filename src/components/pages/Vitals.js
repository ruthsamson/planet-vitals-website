import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, ImageListItem, Box, ImageListItemBar, Paper, ListItem } from '@mui/material'
import climateChange from '../../images/climate-change.jpeg'
import weather from '../../images/weather-forecast.png'
import severeWeatherAlerts from '../../images/severe-weather.webp'
import worldData from '../../images/world-data.png'
import wildfire from '../../images/wildfire.jpeg'
import airQuality from '../../images/air-quality.jpeg'
import earthquake from '../../images/earthquake.jpeg'
import volcano from '../../images/volcano.jpeg'
import drought from '../../images/drought.jpeg'
import flood from '../../images/flood.jpeg'
import storm from '../../images/storm.jpeg'
import landslide from '../../images/landslide.jpeg'
import Helmet from 'react-helmet'



const Vitals = () => {

  
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
    img: severeWeatherAlerts,
    title: 'Severe Weather',
    path: 'severeweatheralerts',
  },

  {
    img: weather,
    title: 'Weather Forecast',
    path: 'weather',
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
    img: earthquake,
    title: 'Earthquakes',
    path: 'earthquakes',
  },

  {
    img: volcano,
    title: 'Volcanoes',
    path: 'volcanoes',
  },

  {
    img: storm,
    title: 'Storms',
    path: 'storms',
  },

  {
    img: flood,
    title: 'Floods',
    path: 'floods',
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