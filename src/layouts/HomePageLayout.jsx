// import { useState } from "react";
// import { CiMenuBurger } from "react-icons/ci";
// import Home from "../pages/home/Home";
// import MyActivity from "../pages/myActivity/MyActivity";
// import UserProfile from "../pages/userProfile/UserProfile";
// import MyActivityStatus from "../pages/myActivityStatus/MyActivityStatus";
// import PostActvity from "../pages/postActivity/PostActvity";
// import SideBarMenuItem from "../components/sections/SidebarMenuItems/SideBarMenuItem";
import HomeNavBar from "../components/sections/homeNavBar/HomeNavBar";
import PostCard from "../components/cards/postCard/PostCard";
import "./HomePageLayout.css";
import SideBarMenuItem from "../components/sections/SidebarMenuItems/SideBarMenuItem";
import MyActivityData from "../components/sections/myactivitiesdata/MyActivityData";
import Home from "../pages/home/Home";

const HomePageLayout = ({children}) => {
  // const [sideBarOpen, setSideBarOpen] = useState(false);
  // const [activePage, setActivePage] = useState("home");

  // const renderPage = () => {
  //   switch (activePage) {
  //     case "home":
  //       return <Home />;
  //     case "myActivity":
  //       return <MyActivity />;
  //     case "profile":
  //       return <UserProfile />;
  //     case "activityStatus":
  //       return <MyActivityStatus />;
  //     case "postActivity":
  //       return <PostActvity />;
  //   }
  // };
  const logo = null;
  return (
    <div className="home-layout-container">
      {/* <CiMenuBurger /> */}
      <div className="layout-container">
        <div className="layout-sidebar">
          <div>
            <div className="logo">
              {logo ? <img src={logo} alt="Logo" /> : <h1>Malingo</h1>}
            </div>
            {Array(4)
              .fill()
              .map((_, index) => (
                <SideBarMenuItem key={index} />
              ))}
          </div>
          <div className="logout-container">
            <h3>Welcome</h3>
            <div>
              <p>David Bache</p>
              <p>davidbache@gmail.com</p>
            </div>
            <button className="logout-btn">Logout</button>
          </div>
        </div>
        <div className="main-container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;
