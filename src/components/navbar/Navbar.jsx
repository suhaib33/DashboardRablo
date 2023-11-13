import React, { useReducer, useState } from "react";
import "../navbar/style/navbar.scss";
import { icons } from "../navbar/style/data";
import { useDispatch, useSelector } from "react-redux";
import { sidebarAction } from "../../store/sidebar";
function Navbar() {
  const isOpen = useSelector((state) => state.sidebar.sidebarIsOpen);
  const dispatch = useDispatch();
  function menuOpenHandler() {
    dispatch(sidebarAction.SidebarOpen());
  }
  const navbar = isOpen ? "navbarOpen" : "navbar";
  console.log(navbar);
  return (
    <div className={navbar}>
      <div className="menu">
        {isOpen ? (
          <img src={icons.cross} onClick={menuOpenHandler} />
        ) : (
          <img src={icons.menu} onClick={menuOpenHandler} />
        )}
      </div>
      {isOpen && <p className="dashboard">Dashboard</p>}
      <div className="home">
        <div className="line"></div>
        <img src={icons.home} />
        {isOpen && <p>Home</p>}
      </div>
      <div className="profileadd">
        <img src={icons.profileadd} />
        {isOpen && <p>Add Students</p>}
      </div>
      {isOpen && (
        <div className="rectangle443">
          <div className="getfreecoins">
            <p>Get Free Points !!</p>
            <div className="rectangle966">
              <img src={icons.add} alt="" />
              <p>500</p>
            </div>
          </div>
        </div>
      )}
      <div className="profile-logout">
        {isOpen && <p>Setting </p>}
        <div className="frame120">
          <img src={icons.profilecircle} />
          {isOpen && <p>My Profile</p>}
        </div>
        <div className="logout">
          {isOpen ? <img src={icons.logoutblue} /> : <img src={icons.logout} />}
          {isOpen && <p>Logout</p>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
