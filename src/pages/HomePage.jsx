//HomePage.jsx
import React from 'react'
import '../styles/Homepage.css'
import Navbar from '../NavBars/Navbar';
import SideBarLeft from '../NavBars/SideBarLeft';
import SideBarRight from '../NavBars/SideBarRight';
import FeedBar from '../components/FeedBar';
import postData from '../data/PostData';
import myTeamData from '../data/MyTeamData';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <SideBarLeft className= 'leftBar'/>
        <div className="feed-area">
          {
            postData.map((post, index)=>(
              <FeedBar className='feed-card' activityData={post} key={index}/>
            ))
          }
        </div>
        <div className='rightBar-container' >
          {
            myTeamData.map((team, index) =>(
              <SideBarRight className='rightBar' teamData={team} key={index}/>
          ))}
        </div>
      </div>

    </div>
  );
}

export default HomePage
