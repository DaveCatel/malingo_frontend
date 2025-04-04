import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useApi from "../../../useApi";
import "./PostCard.css";
import MyActivityData from "../../sections/myactivitiesdata/MyActivityData";

const BASE_URL = "https://rrn24.techchantier.site/malingo/public/api/";

const PostCard = () => {
 const navigate = useNavigate()

  const [approvedActivities, setApprovedActivities] = useState([]);

  const [pendingActivities, setPendingActivities] = useState([]);
  

  const {
    data: activities,
    loading,
    error,
    refetch,
    request,
  } = useApi("https://rrn24.techchantier.site/malingo/public/api/activity");

  useEffect(() => {
    refetch();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  console.log("Activities Data:", activities);


  const handleJoinActivity = async (id, ActivityPhoto, title) => {
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

  const handleViewDetails = async (id) => {
    try {
      const response = await fetch(`https://rrn24.techchantier.site/malingo/public/api/activity/${id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }
  
      const activityDetails = await response.json();
  
      // Navigate to details page with activity data
      navigate(`/details/${id}`, { state: { activityDetails } });
  
    } catch (error) {
      console.error("Error fetching activity details", error);
      alert("Could not fetch activity details!!!");
    }
  };
  

  return (
    <div className="post-cards-container">
      {Array.isArray(activities) && activities.length > 0 ? (
        activities.map((activity) => {
          const userImage =
            "https://cdn.pixabay.com/photo/2020/11/28/19/18/girl-5785590_640.jpg";
          
            const photoUrl = activity.ActivityPhoto.startsWith("http")
            ? activity.ActivityPhoto
            : `${BASE_URL}${activity.ActivityPhoto}`;

          return (
            <div className="post-card-container" key={activity.id}>
              <div className="profile-area-container">
                <div className="profile-area">
                  <div className="post-activity-profile-image">
                    {userImage ? (
                      <img src={userImage} alt="user image" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="profile-area-name">
                    <h3>{activity.title}</h3>
                    <p>{new Date(activity.time).toLocaleString()}</p>
                  </div>
                </div>
                <h3>{activity.numberOfMembers} Members</h3>
              </div>
              <div className="activity-post-area">
                <div className="post-details-area">
                  {photoUrl ? (
                    <div className="post-activity-image">
                      <img
                        src={photoUrl}
                        alt="activity-post-photo"
                        className="activity-post-image"
                        onError={(e) =>
                          (e.target.src =
                            "https://cdn.pixabay.com/photo/2019/02/01/12/18/mountains-3968899_960_720.jpg")
                        }
                      />
                    </div>
                  ) : null}
                  <div className="post-description">
                    <h3>{activity.title}</h3>
                    <p>
                      {activity.description
                        ? activity.description
                        : "No description available"}
                    </p>
                  </div>
                  <div className="post-card-button">
                    <button
                      onClick={() =>
                        handleJoinActivity(
                          activity.id,
                          activity.title,
                          activity.ActivityPhoto
                        )
                      }
                    >
                      Join
                    </button>
                      <button
                      onClick={() => handleViewDetails(activity.id)}
                      >View Details</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No activities found.</p>
      )}
    </div>
  );
};

export default PostCard;
