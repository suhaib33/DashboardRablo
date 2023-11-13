import React from "react";
import "./style/createplan.scss";
import { icons } from "./style/data";
function CreatePlan() {
  return (
    <div className="Rectangle877">
      <div className="greet">
        <p>Namaste, John P.</p>
        <p>Let’s Track all your students</p>
      </div>
      <div className="plan">
        <p>Create Plan</p>
        <img src={icons.rightarrow} alt="" />
      </div>
    </div>
  );
}

export default CreatePlan;
