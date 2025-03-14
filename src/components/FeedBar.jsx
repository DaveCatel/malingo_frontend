import React from 'react';
import '../styles/Feed.css';

const FeedBar = ({activityData}) => {
  console.log("activity data", activityData)
  if(!activityData){
    return<h2>No activity created</h2>
  }
  return (
    <div className='feed-container'>
      <div className="activity-wrapper">
        <div className="profile-area">
          <img className='profile-pic' src={activityData.user_data.profile} alt="Profile" />
          <div>
            <h3>{activityData.user_data.name}</h3>
            <p className='post-date'>{activityData.activity_data.created_at}</p>
          </div>
        </div>

        <div className="activity-area">
          {activityData.activity_data.activity_photo && (
          <img className='activity-pic' src={activityData.activity_data.activity_photo} alt="Activity preview" />
          )}
          <p className="activity-desc">
            <h3>{activityData.activity_data.title}</h3>
            <p>{activityData.activity_data.Description}</p>
          </p>
        </div>

        <div className="actions">
          <p><strong>Date:</strong> {activityData.activity_data.dateAndTime.date}</p>
          <p><strong>Time:</strong>{activityData.activity_data.dateAndTime.time}</p>
          <p><strong>Members:</strong> {activityData.activity_data.numberOfMember}</p>
          <button className="join-btn">Join</button>
        </div>
      </div>
    </div>
  );
};

export default FeedBar;
