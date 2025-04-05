import { useState } from "react";
import {
  RiImageAddLine,
  RiSendPlane2Line,
  RiMapPin2Line,
  RiLink,
  RiCalendar2Line,
  RiTeamLine
} from "react-icons/ri";
import "./UpdateActivity.css";
import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";

const UpdateActivity = () => {
  const [activityData, setActivityData] = useState({
    title: "",
    ActivityPhoto: "",
    description: "",
    link: "",
    location: "",
    numberOfMembers: 0,
    time: ""
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivityData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      setActivityData((prev) => ({
        ...prev,
        ActivityPhoto: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateActivity = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    const formData = new FormData();

    for (const key in activityData) {
      formData.append(key, activityData[key]);
    }

    try {
      const response = await fetch('https://rrn24.techchantier.site/malingo/public/api/activity/4', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `Error: ${response.status}`);
      }

      setMessage("Activity updated successfully!");
      console.log("Activity updated:", result);
    } catch (error) {
      console.error("Update error:", error);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Update-activity-container">
        
      <div className="Update-activity">
        <HomeNavBar />
        <div className="Update-container">
          <h2>Update Activity</h2>
          <p className="subtitle">Make changes to your activity</p>

          {message && (
            <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
              {message}
            </div>
          )}

          <form onSubmit={updateActivity}>
            <div className="Update-activity-inputs">
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={activityData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter activity title here"
                  className="form-control"
                />
              </div>

              <div className="form-group photo-upload">
                <label htmlFor="ActivityPhoto">Activity Photo</label>
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
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={activityData.description}
                  onChange={handleChange}
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
                    value={activityData.location}
                    onChange={handleChange}
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
                    value={activityData.link}
                    onChange={handleChange}
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
                    value={activityData.numberOfMembers}
                    onChange={handleChange}
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
                    value={activityData.time}
                    onChange={handleChange}
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
                  <RiSendPlane2Line className="button-icon" /> Update activity
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateActivity;
