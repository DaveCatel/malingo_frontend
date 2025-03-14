import React from 'react';
import '../styles/Homepage.css'
const HomeComponent = (props) => {
  return (
    <div className="container">
      <div className='activity-card'>
        <h3>{props.title}</h3>
        <img className='activity-pic' src={props.activityPic} alt={props.desc} />
        <p>{props.description}</p>
        <p>{props.time}</p>
        <p>{props.location}</p>
        
      </div>
    </div>
  )
}

export default HomeComponent
