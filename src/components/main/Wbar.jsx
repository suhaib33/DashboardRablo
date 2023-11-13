import React from "react";
import "./style/wrapupbar.scss";
import { icons } from "./style/data";
function WrapUpBar() {
  return (
    <div className="rectangle880">
      <p className="wrapbar">Wrap-up Bar</p>
      <div className="studentinfo">
        <div className="available">
          <img src={icons.group245} alt="" />
          <div className="group1">
            <p className="astudent">Available Student</p>
            <div className="horizontal-line"></div>
            <p className="count">200</p>
          </div>
        </div>
        <img className="line1" src={icons.line84} alt="" />
        <div className="subscribed-student">
          <img src={icons.lock} alt="" />
          <div className="group2">
            <p className="sb">Subscribed Student</p>
            <div className="horizontal-line"></div>
            <p className="locked">Locked</p>
          </div>
        </div>
        <img className="line1" src={icons.line84} alt="" />
        <div className="active-batch">
          <img src={icons.lock} alt="" />
          <div className="group3">
            <p className="ab">Active Batch</p>
            <div className="horizontal-line"></div>
            <p className="locked">Locked</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrapUpBar;
