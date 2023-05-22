import React from "react";
import clouds from "./images/clouds.gif";

export default function ThirdDay() {
  return (
    <div className="ThirdDay">
      <div className="col-2">
        MON
        <div className="col-sm">
          <img id="icon" src={clouds} alt="snowflake" width="48px" />
        </div>
        <div className="temp">
          <div className="col-sm">max -2°C |°F</div>
          <div className="col-sm">min -2°C |°F</div>
        </div>
      </div>
    </div>
  );
}
