import React from 'react'
import HomeNavBar from '../../components/sections/homeNavBar/HomeNavBar'
import NotificationData from '../../data/notificationdata/NotificationData'
import './Notification.css'
const Notification = ({onClick}) => {
  return (
    <div onClick={onClick} className='notification-container'>
        <HomeNavBar />

      <div className="notification-container-main">
        <div className="notification-area">
            <NotificationData />
        </div>
      </div>
    </div>
  )
}

export default Notification
