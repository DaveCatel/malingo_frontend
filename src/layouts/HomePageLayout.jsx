import { useState } from "react"; // This import was commented out
import { RiHome4Line, RiSearchLine, RiNotification2Line, RiMailLine } from "react-icons/ri"; // This import was missing
import "./HomePageLayout.css";
import MyActivityData from "../components/sections/myactivitiesdata/MyActivityData";
import Home from "../pages/home/Home";
import UserProfile from "../pages/userProfile/UserProfile";
import SideBarMenuItem from "../components/sections/Sidebarmenuitems/SideBarMenuItem";
import ActivityDetails from "../pages/activityDetails/ActivityDetails";
import PostActivity from "../pages/postActivity/PostActvity";
import Notification from "../pages/notification/Notification";

const HomePageLayout = ({children}) => {
  const [activePage, setActivePage] = useState("Home");

  const sidebarMenuItems = [
    {
      title: "Home",
      icon: RiHome4Line
    },
    {
      title: "profile",
      icon: RiSearchLine
    },
    {
      title: "Post Activity",
      icon: RiSearchLine
    },
    {
      title: "Activities Joined",
      icon: RiNotification2Line
    },
    {
      title: "Notification",
      icon: RiNotification2Line
    }
  ];
  
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  const renderPage = () => {
    switch (activePage) {
      case "Home":
        return <Home />
        case "profile":
          return <UserProfile onClick={()=>handlePageChange("profile")} />
        case "Post Activity":
          return <PostActivity onClick={()=>handlePageChange("Post Activity")} />
          case "Notification":
            return <Notification onClick={()=>handlePageChange("Notification")} />
      default:
        return <Home />; // Default case
    }
  };

  const logo = null;
  return (
    <div className="home-layout-container">
      <div className="layout-container">
        <div className="layout-sidebar">
          <div className="logo">
            {logo ? <img src={logo} alt="Logo" /> : <h1>Malingo</h1>}
          </div>
          
          {sidebarMenuItems.map((item, index) => (
            <SideBarMenuItem 
              key={index}
              title={item.title}
              icon={item.icon}
              onClick={() => handlePageChange(item.title)}
            />
          ))}
          
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
          {
          console.log("Page: ", renderPage)}
          {renderPage()} {/* Function needs to be called with () */}
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;