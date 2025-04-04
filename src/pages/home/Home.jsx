import MyActivityData from "../../components/sections/myactivitiesdata/MyActivityData";
import PostCard from "../../components/cards/postCard/PostCard";
import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";
import './Home.css'
const Home = () => {
  return (
    <>
      <HomeNavBar />
      <div className="main-home-section">
        <div className="activity-container">
          <PostCard />
        </div>
        <div className="activity-list">
          <div className="activity-list-accepted">
            <h2>Activities approved</h2>
                <MyActivityData />
            <div className="view-accepted-list-btn">
              <button>View More</button>
            </div>
          </div>
          <div className="activity-list-unapproved">
            <h2>Pending Activities</h2>
            {Array(4)
              .fill()
              .map((_, index) => (
                <MyActivityData key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
