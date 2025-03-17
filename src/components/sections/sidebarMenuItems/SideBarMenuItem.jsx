import React from 'react'
import { RiHome4Line } from "react-icons/ri";
import './SideBarMenuItem.css'

const SideBarMenuItem = () => {
  return (
    <div className='sidebar-items'>
      {/* {icon}
      {title} */}
      <RiHome4Line color='white' size={24} />
      <h3>Home</h3>
    </div>
  )
}

export default SideBarMenuItem
