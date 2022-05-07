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
  
        {
          title: 'Sustainability',
          path: 'sustainability'
        }
      ];

    const [openDrawer, setOpenDrawer] = useState(false);
    
  return (
    <>
        <Drawer 
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        >
            <List>
                {pages.map((page, index) => (
                    <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                        <ListItemIcon>
                            <Link to={`/${page.path}`} style={{textDecoration: 'none'}}>
                                <ListItemText>
                                    {page.title}
                                </ListItemText>
                            </Link>
                        </ListItemIcon>
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