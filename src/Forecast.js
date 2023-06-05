import React from "react";
import axios from "axios";
import FirstDay from "./FirstDay";
import SecondDay from "./SecondDay";
import ThirdDay from "./ThirdDay";
import FourthDay from "./FourthDay";
import FifthDay from "./FifthDay";
import SixthDay from "./SixthDay";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response){
    console.log(response.data);
}
let apiKey = `2cc11cocaf0f9420tbdaec31809b2ceb`;
let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=${props.place}&key=${apiKey}`

axios.get(apiForecast).then(handleResponse)
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
