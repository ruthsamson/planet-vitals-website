import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Vitals from './components/pages/Vitals';
import ClimateChange from './components/pages/ClimateChange';
import WorldData from './components/pages/WorldData';
import SevereWeather from './components/pages/SevereWeather';
import Weather from './components/pages/Weather';
import Wildfires from './components/pages/Wildfires';
import AirQuality from './components/pages/AirQuality';
import Earthquakes from './components/pages/Earthquakes';
import Volcanoes from './components/pages/Volcanoes';
import Storms from './components/pages/Storms';
import Floods from './components/pages/Floods';
import Droughts from './components/pages/Droughts';
import Landslides from './components/pages/Landslides';
import Navbar from './components/Navbar';
import Sustainability from './components/Sustainability';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  exact element={<Home />}/>
          <Route path='/vitals' element={<Vitals />}/>
          <Route path='/sustainability' element={<Sustainability />}/>
          <Route path='/climatechange' element={<ClimateChange />}/>
          <Route path='/worlddata' element={<WorldData />}/>
          <Route path='/severeweatheralerts' element={<SevereWeather />}/>
          <Route path='/weather' element={<Weather />}/>
          <Route path='/wildfires' element={<Wildfires />}/>
          <Route path='/airquality' element={<AirQuality />}/>
          <Route path='/earthquakes' element={<Earthquakes />}/>
          <Route path='/volcanoes' element={<Volcanoes />}/>
          <Route path='/storms' element={<Storms />}/>
          <Route path='/floods' element={<Floods />}/>
          <Route path='/droughts' element={<Droughts />}/>
          <Route path='/landslides' element={<Landslides />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
