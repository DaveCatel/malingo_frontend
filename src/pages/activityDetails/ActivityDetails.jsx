import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";
import MyTeamData from "../../components/sections/myteam/MyTeamData";
import "./ActivityDetails.css";

const ActivityDetails = () => {
  const detailsActivithPic = "https://cdn.pixabay.com/photo/2017/08/07/23/50/climbing-2609319_1280.jpg";
  const detailsProfilePic =
    "https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png";
  return (
    <div className="details">
      <div className="main-details-container">
        <div className="sidebar-layouts">side bar here</div>
        <div className="details-area-container">
          <HomeNavBar />
          <div className="details-area">
            <div className="photo-description-area">
              {detailsActivithPic && (
                <div className="photo-details">
                  <img src={detailsActivithPic} alt="activity pic" />
                </div>
              )}
              <div className="description-details">
                <p>
                  join me loss weight by engaging in morning runs from check
                  point to Buea Town join me loss weight by engaging in morning
                  runs from check point to Buea Town join me loss weight by
                  engaging in morning runs from check point to Buea Town
                </p>
              </div>
            </div>

            <div className="details-joined-area">
              <div className="name-profile-pic-area">
                <div className="profile-pic-and-name">
                  <div className="details-profile-pic">
                    {detailsProfilePic ? (
                      <img src={detailsProfilePic} alt="" />
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <h3>Grace Toseh</h3>
                </div>
                <div className="title-details-area">
                  <h3>Morning run</h3>
                  <p>Activity members: 12/20</p>
                  <p>Activity date: 20/june/2025</p>
                  <p>Date Created: 15/March/2025</p>
                  <button>Join Activity</button>
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
