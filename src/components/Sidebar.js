import { Close, HealthAndSafety } from '@mui/icons-material';
import {  IconButton } from '@mui/material';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const { isSideBarOpen, closeSideBar } = useContext();
  
  return (
    <aside>
      <div className='sidebar-header'>
        {/* <img src={logo} className='logo' alt='Planet earth logo' /> */}
        <IconButton>
          <Close/>
        </IconButton>
      </div>
      <ul>
        {links.map((link) => {
          const {id, path, text, icon} = link;
          return (
            <li key={id}>
              <Link to={`/${path}`}>
                {icon}
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

const links = [
  {
    id: 1,
    path: 'vitals',
    icon: <HealthAndSafety />,
    text: 'Vitals',
  },
  {
    id: 2,
    path: 'help',
    icon: <HealthAndSafety />,
    text: 'How to Help',
  },
]

export default Sidebar