import React from 'react'
import './Loading.css'
import 'animate.css';
import loader from '../videos/loader.gif'


const Loading = () => {
  return (
    <div className='loading'>
        {/* <h1 class="animate__animated animate__bounce">Loading...</h1> */}
        <img src={loader} alt='Loader' />      
    </div>
  )
}

export default Loading