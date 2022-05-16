import { Menu } from '@mui/icons-material';
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


const Sidebar = () => {

    const pages = [
        {
            title: 'Home',
            path: ''
        },
  
        {
          title: 'Vitals',
          path: 'vitals'
        },
      ];

    const [openDrawer, setOpenDrawer] = useState(false);
    
  return (
    <>
        <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className='sidebar'
        >
            <List className='list'>
                {pages.map((page, index) => (
                    <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <Link to={`/${page.path}`} style={{textDecoration: 'none'}}>
                                <ListItemText className='list-item'>
                                    {page.title}
                                </ListItemText>
                            </Link>
                    </ListItemButton>
                
                ))}
            </List>
        </Drawer>
        <IconButton className='hamburger' onClick={() => setOpenDrawer(!openDrawer)}>
            <Menu />
        </IconButton>

    </>
  )
}

export default Sidebar