import "./MyCreatedActivity.css";

const MyCreatedActivity = () => {
  const userProfileActivityPhoto = "https://cdn.pixabay.com/photo/2020/11/28/19/18/girl-5785590_640.jpg";
  return (
    <div className="my-created-activity-container">
      <div className="my-created-activity">
        <div className="my-created-activity-info">
          <div className="my-created-activity-pic">
            {userProfileActivityPhoto ? (
              <img src={userProfileActivityPhoto} alt="Activity photo" />
            ) : (
              <div></div>
            )}
          </div>
          <div className="my-created-activity-title">
            <h3>Mountain Hiking</h3>
            <p>22/March/2025</p>
          </div>
        </div>
        <div className="my-created-activity-date-crud">
          <p>20/June/2025</p>
          <div className="my-created-activity-crud">
            <button className="update">Update</button>
            <button className="delete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCreatedActivity;
