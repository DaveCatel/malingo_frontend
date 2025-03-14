import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SideBarLeft.css';
import { LeftSideBarData } from './LeftSideBarData';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function SideBarLeft() {
  const [isOpen, setIsOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);


  return (
    <>
      <div className="leftBar">
          <Link to='#' className='menu-bars'>
          <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon/>
          </div>
          </Link>
        <nav className={sideBar ? 'left-menu active' : 'left-menu'}>
          <ul className="left-menu-items">
            <li className="left-menu-toggle">
              <Link to='#' className="menu-bars">
                  <CloseIcon />
              </Link>
            </li>
            {LeftSideBarData.map((item,index) => {
              return (
                <li key={index} className="nav-text">
                  <Link to={item.path}>
                  <div className={`menu ${isOpen ? "show" : ""}`}>
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                  </Link>
                </li>
              )
            })}
          </ul>

        </nav>
      </div>
    </>
  )
}

export default SideBarLeft


