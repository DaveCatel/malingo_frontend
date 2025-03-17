import "./HomeNavBar.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

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
        <div>
          <IoIosNotificationsOutline color="white" size={30} />
          <div className="home-nav-profile"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;
