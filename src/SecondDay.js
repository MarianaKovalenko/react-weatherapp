import React from "react";
import clouds from "./images/clouds.gif";

export default function SecondDay() {
  return (
    <div className="SecondDay">
      <div className="col-2">
        SUN
        <div className="col-sm">
          <img id="icon" src={clouds} alt="snowflake" width="48px" />
        </div>
        <div className="temp">
          <div class="col-sm">max -2°C |°F</div>
          <div className="col-sm">min -2°C |°F</div>
        </div>
      </div>
    </div>
  );
}
