import React from "react";
import { icons } from "./style/assets/data,";
import Frame232 from "./Frame232";
import "./style/topbar.scss";
function TopBar() {
  return (
    <div className="topbar">
      <div className="rabloicon">
        <img src={icons.rablo5} alt="" />
      </div>
      <div className="Frame">
        <Frame232 />
      </div>
    </div>
  );
}

export default TopBar;
