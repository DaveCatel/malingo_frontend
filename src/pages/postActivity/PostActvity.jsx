import { useState } from "react";
import "./PostActivity.css";

const PostActivity = ({onClick}) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [data, setEventData] = useState({
    title: "",
    ActivityPhoto: null,
    description: "",
    location: "",
    link: "",
    numberOfMembers: "",
    time: "",
  });

  const handleCreateActivity = async () => {
    const url = "https://rrn24.techchantier.site/malingo/public/api/activity";
    const token = localStorage.getItem("token");
  
    if (!token) {
      alert("You need to log in first.");
      return;
    }
  
    if (!data.ActivityPhoto) {
      alert("Please select an activity photo.");
      return;
    }
  
    console.log("Selected file:", data.ActivityPhoto); // ✅ Debugging
    
    const formattedTime = data.time.replace("T", " ") + ":00";

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("ActivityPhoto", data.ActivityPhoto); // ✅ Ensure it's a file
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("link", data.link);
    formData.append("numberOfMembers", data.numberOfMembers);
    formData.append("time", formattedTime);
  
    try {
      setLoading(true);
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create activity");
      }
  
      const responseData = await response.json();
      console.log("Activity successfully created: ", responseData);
      alert("Activity created successfully");
  
      setEventData({
        title: "",
        ActivityPhoto: null,
        description: "",
        location: "",
        link: "",
        numberOfMembers: "",
        time: "",
      });
  
      setMessage("Activity created successfully!");
    } catch (error) {
      console.error("Error: ", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  

  // ✅ Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ✅ Handle File Input
  const handlePhoto = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      ActivityPhoto: e.target.files[0], // Use files[0] for actual file
    }));
  };

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCreateActivity();
  };

  return (
    <div className="post-activity-container" onClick={onClick}>
      {/* <div className="sidebar-area">Side bar appears here</div> */}
      <div className="post-activity">
        <div className="post-container">
          <h3>Create an Activity</h3>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="post-activity-inputs">
              <div className="title-input">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter activity title here"
                />
              </div>

              <div className="activity-photo">
                <label htmlFor="ActivityPhoto">Activity Photo</label>
                <input
                  type="file"
                  name="ActivityPhoto"
                  onChange={handlePhoto}
                  accept="image/*"
                  required
                />
              </div>

              <div className="text-area">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Activity description"
                  className="text-area-input"
                />
              </div>

              <div className="location-link">
                <div className="location">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter event location"
                  />
                </div>
                <div className="chat-link">
                  <label htmlFor="link">Link</label>
                  <input
                    type="url"
                    name="link"
                    value={data.link}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter link to chat"
                  />
                </div>
              </div>

              <div className="location-container">
                <div className="number-of-mem">
                  <label htmlFor="numberOfMembers">Number of Members</label>
                  <input
                    type="number"
                    name="numberOfMembers"
                    value={data.numberOfMembers}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter number of members"
                  />
                </div>
                <div className="activity-date">
                  <label htmlFor="time">Date</label>
                  <input
                    min={new Date().toISOString().slice(0, -8)}
                    type="datetime-local"
                    name="time"
                    value={data.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Create Activity"}
            </button>
            {message && <p style={{ color: "green" }}>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostActivity;
