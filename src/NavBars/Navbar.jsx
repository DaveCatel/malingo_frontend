import React from 'react'
import '../styles/NavBar.css'
import { Search } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import profilePic from '../assets/pic.png'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="navbar-left">
            <span className="logo">Malingo</span>
        </div>
        
        <div className="navbar-center">
            <span className="create-activity">
                    <AddIcon className='add-icon'/>
                </span>
            <div className="search-bar">
                <Search className='search-icon'/>
                <input placeholder='search' className='search-input' />
            </div>
        </div>
        <div className="navbar-right">
            <span className="notification">
                <NotificationsNoneIcon />2
            </span>
            <span className="setting-icon">
                <SettingsIcon />
            </span>
            <span className="profile-pic">
                <img src={profilePic} alt="" className="profile-img" />
            </span>
        </div>
    </div>
  )
}

export default Navbar
