import React, { useState } from 'react';
import '../styles/SideBarRight.css';

const SideBarRight = ({teamData}) => {
  if(!teamData){
    return(
      <h2>No memeber yet</h2>
    )
  }

  return (

    <div className='right-wrapper'>
            
            <div className='team-container'>
                <img src={teamData.profile_pic} alt="" className='profile-pic'/>
                <h4>{teamData.name}</h4>
            </div>

            <div className="recent-activities">
            </div>
     </div>

  );
};

export default SideBarRight;
