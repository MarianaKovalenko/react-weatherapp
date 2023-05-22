import React from "react";
import sun from "./images/sun.gif";

export default function FourthDay() {
  return (
    <div className="FouthDay">
      <div className="col-2">
        TUE
        <div className="col-sm">
          <img id="icon" src={sun} alt="snowflake" width="48px" />
        </div>
        <div className="temp">
          <div className="col-sm">max -2°C |°F</div>
          <div className="col-sm">min -2°C |°F</div>
        </div>
      </div>
    </div>
  );
}
