import React from "react";
import rain from "./images/rain.gif";

export default function ThirdDay() {
  return (
    <div className="ThirdDay">
      <div className="col-2">
        THU
        <div className="col-sm">
          <img id="icon" src={rain} alt="snowflake" width="48px" />
        </div>
        <div className="temp">
          <div className="col-sm">max -2°C |°F</div>
          <div className="col-sm">min -2°C |°F</div>
        </div>
      </div>
    </div>
  );
}
