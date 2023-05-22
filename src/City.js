import React from "react";

export default function City() {
  return (
    <div className="City">
      <div className="column">
        <div className="left">
          <div className="col-sm-10" id="city-title">
            <h1>KYIV</h1>
          </div>
          <div className="col-sm-10" id="curently-date">
            Friday:13:00
          </div>
          <div className="col-sm-10">
            <div className="name-weather" id="description">
              Snow
            </div>
          </div>
          <div className="col-sm-10" id="humidity">
            Humidity:85%
          </div>
          <div className="col-sm-10" id="wind">
            Wind: 1km/h
          </div>
        </div>
      </div>
    </div>
  );
}
