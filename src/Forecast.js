import React from "react";
import FirstDay from "./FirstDay";
import SecondDay from "./SecondDay";
import ThirdDay from "./ThirdDay";
import FourthDay from "./FourthDay";
import FifthDay from "./FifthDay";
import SixthDay from "./SixthDay";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <FirstDay />
      <SecondDay />
      <ThirdDay />
      <FourthDay />
      <FifthDay />
      <SixthDay />
    </div>
  );
}
