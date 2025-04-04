import PostCard from "../../components/cards/postCard/PostCard";
import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";
import MyTeamData from "../../components/sections/myteam/MyTeamData";
import "./ActivityDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
const BASE_URL = "https://rrn24.techchantier.site/malingo/public/api/";

const ActivityDetails = ({onClick}) => {

  const { state } = useLocation();
  const activity = state?.activityDetails;

  
  const handleJoinedActivity = async (id, ActivityPhoto, title) => {
    const url = `https://rrn24.techchantier.site/malingo/public/api/activities/${id}/join`;
    
    const token = localStorage.getItem("token"); // Retrieve the token for authentication
    if (!token) {
      alert("You need to log in first!");
      return;
    }
  
    const data = {
      title,
      ActivityPhoto,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include token in headers
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to join activity");
      }
  
      const responseData = await response.json();
      console.log("Join request successful:", responseData);
      alert("Join request sent successfully!");
  
      // Update pending activities state
      setPendingActivities((prev) => [...prev, { id, title, ActivityPhoto }]);
    } catch (error) {
      console.error("Error:", error);
      alert(error.message);
    }
  };


  // If no activity found, show loading message
  if (!activity) return <p>Loading activity details...</p>;

  const detailsActivithPic = "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg";
  const detailsProfilePic = "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png";
  const photoUrl = activity.ActivityPhoto.startsWith("http")
  ? activity.ActivityPhoto : 
  `${BASE_URL}${activity.ActivityPhoto}`;
  return (
    <div className="details" onClick={onClick}>
      <div className="main-details-container">
        <div className="sidebar-layouts">side bar here</div>
        <div className="details-area-container">
          <HomeNavBar />
          <div className="details-area">
            <div className="photo-description-area">
              {photoUrl ? (
                <div className="photo-details">
                  <img 
                    src={photoUrl} 
                    alt="activity" 
                    onError={(e) => e.target.src = "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg"} // Fix onError handler
                  />
                </div>
              ) : null}
              <div className="description-details">
                <p>{activity.description}</p>
              </div>
            </div>

            <div className="details-joined-area">
              <div className="name-profile-pic-area">
                <div className="profile-pic-and-name">
                  <div className="details-profile-pic">
                    {detailsProfilePic ? (
                      <img src={detailsProfilePic} alt="profile" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <h3>Grace Toseh</h3> {/* Replace with dynamic data */}
                </div>
                <div className="title-details-area">
                  <h3>{activity.title}</h3>
                  <p>Number of members: {activity.numberOfMembers}</p>
                  <p>Activity date: {new Date(activity.time).toLocaleString()}</p>
                  <p>Date Created: {new Date(activity.updated_at).toLocaleString()}</p>
                  <button
                    onClick={() =>
                      handleJoinedActivity(
                        activity.id,
                        activity.title,
                        activity.ActivityPhoto
                      )
                    }
                  >
                    Join Activity
                  </button>
                </div>
              </div>
              <div className="joined-details-area">
                <h3>My activity members</h3>
                {Array(3)
                  .fill()
                  .map((_, index) => (
                    <MyTeamData key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetails;
