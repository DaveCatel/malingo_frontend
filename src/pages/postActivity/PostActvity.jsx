import { useState } from "react";
import { RiImageAddLine, RiSendPlane2Line, RiMapPin2Line, RiLink, RiCalendar2Line, RiTeamLine } from "react-icons/ri";
import "./PostActivity.css";

const PostActivity = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
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
      setMessage("You need to log in first.");
      return;
    }
  
    if (!data.ActivityPhoto) {
      setMessage("Please select an activity photo.");
      return;
    }
    
    const formattedTime = data.time.replace("T", " ") + ":00";

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("ActivityPhoto", data.ActivityPhoto);
    formData.append("description", data.description);
    formData.append("location", data.location);
    formData.append("link", data.link);
    formData.append("numberOfMembers", data.numberOfMembers);
    formData.append("time", formattedTime);
  
    try {
      setLoading(true);
      setMessage("");
  
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
  
      setEventData({
        title: "",
        ActivityPhoto: null,
        description: "",
        location: "",
        link: "",
        numberOfMembers: "",
        time: "",
      });
      
      setPreviewUrl(null);
      setMessage("Activity created successfully!");
    } catch (error) {
      console.error("Error: ", error);
      setMessage(error.message || "Failed to create activity. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEventData((prevData) => ({
        ...prevData,
        ActivityPhoto: file,
      }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleCreateActivity();
  };

  return (
    <div className="post-activity-container">
      <div className="post-activity">
        <div className="post-container">
          <h2>Create an Activity</h2>
          <p className="subtitle">Share a new activity with the community</p>
          
          {message && (
            <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
              {message}
            </div>
          )}
          
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="post-activity-inputs">
              <div className="form-group">
                <label htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={data.title}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter activity title here"
                  className="form-control"
                />
              </div>

              <div className="form-group photo-upload">
                <label htmlFor="ActivityPhoto">
                  Activity Photo
                </label>
                <div className="file-upload-container">
                  <input
                    type="file"
                    id="ActivityPhoto"
                    name="ActivityPhoto"
                    onChange={handlePhoto}
                    accept="image/*"
                    required
                    className="file-input"
                  />
                  <div className="file-upload-box">
                    {previewUrl ? (
                      <div className="preview-container">
                        <img src={previewUrl} alt="Preview" className="image-preview" />
                        <span className="change-photo">Click to change</span>
                      </div>
                    ) : (
                      <>
                        <RiImageAddLine className="upload-icon" />
                        <span>Choose a photo</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={data.description}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your activity in detail..."
                  className="form-control text-area-input"
                  rows="4"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="location">
                    <RiMapPin2Line className="input-icon" /> Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={data.location}
                    onChange={handleInputChange}
                    required
                    placeholder="Where will this happen?"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="link">
                    <RiLink className="input-icon" /> Chat Link
                  </label>
                  <input
                    type="url"
                    id="link"
                    name="link"
                    value={data.link}
                    onChange={handleInputChange}
                    required
                    placeholder="Link to discussion or chat"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="numberOfMembers">
                    <RiTeamLine className="input-icon" /> Maximum Members
                  </label>
                  <input
                    type="number"
                    id="numberOfMembers"
                    name="numberOfMembers"
                    value={data.numberOfMembers}
                    onChange={handleInputChange}
                    required
                    placeholder="How many can join?"
                    className="form-control"
                    min="1"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">
                    <RiCalendar2Line className="input-icon" /> Date & Time
                  </label>
                  <input
                    min={new Date().toISOString().slice(0, -8)}
                    type="datetime-local"
                    id="time"
                    name="time"
                    value={data.time}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? (
                <span className="loading-spinner"></span>
              ) : (
                <>
                  <RiSendPlane2Line className="button-icon" /> Create Activity
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostActivity;