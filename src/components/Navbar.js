import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/earth-logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Tab, Tabs, useTheme, useMediaQuery} from '@mui/material';
import Sidebar from './Sidebar';

const Navbar = () => {

    const [value, setValue] = useState(0);

    const theme = useTheme();

    const screenSizeMatch = useMediaQuery(theme.breakpoints.down('md'));

    const handleChange = (e, value) => {
     setValue(value)
    }

  return (
    <div className='root'>
      <AppBar className='navbar'>
          <Toolbar>
          <Link to='/'>
              <img src={logo} alt='logo' className='navbar-logo'/>
          </Link>
            {screenSizeMatch ? (
              <>
                <Sidebar />
              </>
              ) : (
                <>
                  <Tabs
                  className='navbar-container'
                  value={value}
                  onChange= {handleChange}
                  indicatorColor='primary'
                  >
                    <Tab className='navbar-item' label='Home' to='/' LinkComponent={Link}/>
                    <Tab className='navbar-item' label='Vitals' to='/vitals' LinkComponent={Link}/>
                  </Tabs>
                </>
              )
            }
          </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
