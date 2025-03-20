import "./UserProfile.css";
import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";
import UserData from "../../data/userdata/UserData";
import MyCreatedActivity from "../../data/mycreatedactivity/MyCreatedActivity";

const UserProfile = () => {
  const userProfileImage =
    "https://cdn.pixabay.com/photo/2022/03/06/07/58/man-7051040_1280.png";
  return (
    <div className="user-profile-main-container">
      <div className="user-profile-container-area">
        <div className="user-sidebar">side bar</div>
        <div className="user-profile-area">
          <div className="user-nav-area">
            <div className="user-nav">
              <HomeNavBar />
            </div>
            <div className="user-profile-data">
              <div className="user-title-area">
                <div className="title-profile-pic">
                  <div className="user-profile-name">
                    <h1>Dave Catel</h1>
                    <h3>Telecommuniction Engr</h3>
                  </div>
                  <div className="user-profile-pic">
                    {userProfileImage ? (
                      <img src={userProfileImage} alt="profile pic" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
              <div className="user-activity-info">
                <div className="user-activity-area">
                  <h1>My Activities</h1>
                  {Array(2).fill().map((_, index) => (
                    <MyCreatedActivity key={index}/>
                  ))}
                </div>
                <div className="user-info">
                  <h2>Information Summary</h2>
                  <div className="user-data">
                    <UserData />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
