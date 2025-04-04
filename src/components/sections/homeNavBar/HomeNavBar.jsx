import { useEffect, useState } from "react";
import "./HomeNavBar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomeNavBar = () => {
  return (
    <div className="home-navbar-container">
      <div className="navbar-container">
        <form action="">
          <div className="search-container">
            <CiSearch color="white" size={30} />
            <input type="search" placeholder="Search..." />
          </div>
        </form>
        <div className="nav-icons">
          <div className="notification-icon">
            <IoIosNotificationsOutline color="white" size={30} />
          </div>
          <Link to="/profile">
            <div className="home-nav-profile"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
