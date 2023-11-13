import React from "react";
import Navbar from "../components/navbar/Navbar";
import TopBar from "../components/topbar/TopBar";
import "./style/home.scss";
import RightSideBar from "../components/righsidebar/RightSideBar";
import CreatePlan from "../components/main/Plan";
import WrapUpBar from "../components/main/Wbar";
import JourneyPath from "../components/main/path";
import { useSelector } from "react-redux";
function Home() {
  const isOpen = useSelector((state) => state.sidebar.sidebarIsOpen);
  const dynamicWidth = isOpen ? { width: "1518px" } : { width: "1360px" };
  console.log(dynamicWidth);
  return (
    <div className="home">
      <Navbar />
      <div className="top-main" style={dynamicWidth}>
        <TopBar />
        <div className="main" style={dynamicWidth}>
          <CreatePlan />
          <WrapUpBar />
          <div className="user-journey">
            <span>User</span> <span>Journey</span>
          </div>
          <JourneyPath />
        </div>
      </div>
      {!isOpen && <RightSideBar />}
    </div>
  );
}

export default Home;
