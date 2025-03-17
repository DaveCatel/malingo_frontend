import React from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = () => {
  const image = null;
  const postImage = "https://cdn.pixabay.com/photo/2020/11/28/19/18/girl-5785590_640.jpg";
  return (
    <div className="post-card-container">
      <div className="profile-area-container">
        <div className="profile-area">
          <div>
            {image ? (
              <img src={image} alt="" />
            ) : (
              <div className="post-activity-profile-image"></div>
            )}
          </div>
          <div className="profile-area-name">
            <h3>David Bache</h3>
            <p>2m ago</p>
          </div>
        </div>
        <h3>20 Members</h3>
      </div>
      <div className="activity-post-area">
        <div className="post-details-area">
          {postImage ? (
            <div className="post-activity-image">
              <img src={postImage} alt="activity-post-photo" className="activity-post-image"/>
            </div>
          ) : (
            <div></div>
          )}
          <div className="post-description">
            <h3>Morning Jug</h3>
            <p>
              Morning Jug Morning Jug Morning Jug Morning Jug Morning Jug
              Morning JugMorning Jug Morning Jug
              Morning Jug Morning Jug Morning Jug Morning Jug Morning Jug
              Morning JugMorning Jug Morning Jug
            </p>
          </div>
          <div className="post-card-button">
            <button>Join</button>
            <Link to="">
            <button>View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
