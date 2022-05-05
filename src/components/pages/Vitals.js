import React from 'react'
import './Vitals.css'
import { Link } from 'react-router-dom'
import { Grid, ImageListItem, ImageListItemBar, ListItem, Stack } from '@mui/material'
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



const Vitals = () => {

  
  return (
    <div className='vitals'>
      <h1 className='vitals-title'>Vitals</h1>
      <div className='vitals-list'>
       <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
       {itemData.map((item) => (
           <Grid item className='grid' xs={6}>
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
       ))};
       </Grid>
      </div>
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
    title: 'Severe Weather Alerts',
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