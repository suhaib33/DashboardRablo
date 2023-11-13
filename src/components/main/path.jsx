import React from "react";
import "./style/journeypath.scss";
import { icons } from "./style/data";
function JourneyPath() {
  return (
    <div className="journeypath">
      <div className="group1">
        <p className="step">Step 1:</p>
        <p className="create">Create Account</p>
        <img className=" tick" src={icons.tick} alt="" />
        <p className="completed">Completed</p>
      </div>
      <div className="group2">
        <p className="step">Step 2:</p>
        <p className="pv">Profile Verified</p>
        <img className=" tick" src={icons.tick} alt="" />
        <p className="completed">Completed</p>
      </div>
      <div className="group3">
        <p className="step">Step 3:</p>
        <p className="cyp">Create Your Plan</p>
        <img className=" plus" src={icons.plus} alt="" />
        <p className="cp">Create Plan</p>
      </div>
      <div className="group4">
        <p className="step">Step 4:</p>
        <p className="ays">Create Account</p>
        <div class="circle">
          {" "}
          <img src={icons.lockt} alt="" />
        </div>

        <p className="add">Completed</p>
      </div>
    </div>
  );
}

export default JourneyPath;
