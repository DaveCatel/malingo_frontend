import MyActivityData from "../../components/sections/myactivitiesdata/MyActivityData";
import PostCard from "../../components/cards/postCard/PostCard";
import HomeNavBar from "../../components/sections/homeNavBar/HomeNavBar";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <div className="main-home-section">
        <div className="activity-container">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div className="activity-list">
          <div className="activity-list-accepted">
            {Array(4)
              .fill()
              .map((_, index) => (
                <MyActivityData key={index} />
              ))}
            <div className="view-accepted-list-btn">
              <button>View More</button>
            </div>
          </div>
          <div className="activity-list-unapproved">
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
