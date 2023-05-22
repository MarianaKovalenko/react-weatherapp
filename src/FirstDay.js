import React from "react";
import cloudy from "./images/cloudy.gif";

export default function FirstDay() {
  return (
    <div className="FirstDay">
      <div className="col-2">
        SAT
        <div className="col-sm">
          <img id="icon" src={cloudy} alt="snowflake" width="48px" />
        </div>
        <div className="temp">
          <div className="col-sm">max -2°C |°F</div>
          <div className="col-sm">min -2°C |°F</div>
        </div>
      </div>
    </div>
  );
}
