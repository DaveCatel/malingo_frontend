import { useState, useEffect } from "react";
import { 
  RiHome4Line, 
  RiUser3Line, 
  RiAddLine, 
  RiCalendarEventLine, 
  RiNotification2Line,
  RiLogoutBoxRLine
} from "react-icons/ri";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarMenuItems = [
    {
      title: "Home",
      icon: RiHome4Line
    },
    {
      title: "Profile",
      icon: RiUser3Line
    },
    {
      title: "Post Activity",
      icon: RiAddLine
    },
    {
      title: "Activities Joined",
      icon: RiCalendarEventLine
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
        return <Home />;
      case "Profile":
        return <UserProfile />;
      case "Post Activity":
        return <PostActivity />;
      case "Activities Joined":
        return <ActivityDetails />;
      case "Notification":
        return <Notification />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="home-layout-container">
      <div className="layout-container">
        <div className="layout-sidebar">
          <div className="logo">
            <h1>{isMobile ? "M" : "Malingo"}</h1>
          </div>
          
          <div className="sidebar-menu">
            {sidebarMenuItems.map((item, index) => (
              <SideBarMenuItem 
                key={index}
                title={item.title}
                icon={item.icon}
                isActive={activePage === item.title}
                onClick={() => handlePageChange(item.title)}
              />
            ))}
          </div>
          
          <div className="logout-container">
            <h3>Welcome</h3>
            <div>
              <p>David Bache</p>
              <p>davidbache@gmail.com</p>
            </div>
            <button className="logout-btn" aria-label="Logout">
              {!isMobile && "Logout"}
            </button>
          </div>
        </div>
        <div className="main-container">
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default HomePageLayout;