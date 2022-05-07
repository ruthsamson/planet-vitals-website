import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import logo from '../images/earth-logo.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Tab, Tabs, useTheme, useMediaQuery} from '@mui/material';
import Sidebar from './Sidebar';

const Navbar = () => {

  const pages = [
      {
          title: 'Home',
          path: ''
      },

      {
        title: 'Vitals',
        path: 'vitals'
      },

      {
        title: 'Sustainability',
        path: 'sustainability'
      }
    ];

    const [value, setValue] = useState();

    const theme = useTheme();

    const screenSizeMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className='root'>
      <AppBar className='navbar'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <img src={logo} alt='logo' className='navbar-logo'/>
            </IconButton>
            {screenSizeMatch ? (
              <>
                <Sidebar />
              </>
              ) : (
                <>
                  <Tabs 
                    className='navbar-container'
                    value={value}
                    onChange={(e, value) => setValue(value)}
                    indicatorColor='secondary'
                  >
                    {pages.map((page, index) => (
                     <Link to={`/${page.path}`}>
                         <Tab key={index} className='navbar-item' label={page.title} />
                     </Link>
                    ))}
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
