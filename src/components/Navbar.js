import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../images/earth-logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Tab, Tabs, useTheme, useMediaQuery} from '@mui/material';
import Sidebar from './Sidebar';

const Navbar = () => {

    const theme = useTheme();

    const screenSizeMatch = useMediaQuery(theme.breakpoints.down('md'));

    const homeClick = () => {
      window.location.href ='/';
    }

    const vitalsClick = () => {
      window.location.href = '/vitals';
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
                  <Tabs className='navbar-container'>
                    <Tab className='navbar-item' label='Home' onClick={homeClick}/>
                    <Tab className='navbar-item' label='Vitals' onClick={vitalsClick}/>
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
