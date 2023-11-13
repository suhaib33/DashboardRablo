import React from "react";
import "./style/fram.scss";
import { icons } from "./style/assets/data,";
function Frame232() {
  function getDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    return days[today.getDay()];
  }

  function getDate() {
    const options = { month: "short", day: "numeric" };
    return new Date().toLocaleDateString(undefined, options);
  }

  function getTime() {
    const options = { hour: "2-digit", minute: "2-digit" };
    return new Date().toLocaleTimeString(undefined, options);
  }

  return (
    <div className="frame232">
      <div className="time">
        {getDay()}, {getDate()} {getTime()}
      </div>
      <div className="wallet">
        <img src={icons.wallet} />
        <span className="money">500</span>
      </div>
      <div className="frame231">
        <img src={icons.line} alt="" />
        <div className="mrgroup">
          <img src={icons.message} alt="" />
          <img id="redDot" src={icons.reddot} alt="" />
        </div>
        <img src={icons.notification}  alt=""/>
      </div>
    </div>
  );
}

export default Frame232;
