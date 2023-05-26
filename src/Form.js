import React, { useState } from "react";
import axios from "axios";
import Main from "./main"


import "./Form.css";

export default function Form(props) {

  const [weather, setWeather] = useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeather({
      ready:true,
      city:response.data.city,
      temp:response.data.temperature.current,
      humidity:response.data.temperature.humidity,
      wind:response.data.wind.speed,
      description:response.data.condition.description,
      icon:`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
    });
    
  }


  if(weather.ready){
    return (
        <div >
        <div className="Form d-block">
        <form className="container-search" id="city">
            <input type="text" placeholder="Change a city" id="city-input" />
            <button type="submit" className="btn btn-primary ms-2" id="search">
              Search
            </button>
            <button type="button" className="btn btn-primary" id="location">
              Location
            </button>
          </form>
          </div>
          <div className="row justify-content-center">
          <div className="column">
          <div className="left">
            <div class="col-sm-10" id="city-title">
              <h1>{weather.city.toUpperCase()}</h1>
            </div>
            <div className="col-sm-10" id="curently-date">
              Friday:13:00
            </div>
            <div className="col-sm-10">
              <div className="name-weather text-capitalize" id="description">
                {weather.description}
              </div>
            </div>
            <div className="col-sm-10" id="humidity">
              Humidity:{weather.humidity}%
            </div>
            <div className="col-sm-10" id="wind">
              Wind: {Math.round(weather.wind)}km/h
            </div>
          </div>
        </div>
        <div className="column">
          <div className="col-sm-10">
            <h2 id="top">Curently</h2>
          </div>
          <div className="col-sm-10">
            <span id="curent-temp">{Math.round(weather.temp)}</span>
            <a href="#top" className="c" id="C-temp">°C</a> |
            <a href="#top" className="f" id="F-temp">°F</a>
          </div>
          <div className="col-sm-10">
            <img id="icon" src={weather.icon} alt={weather.description} width="48px" />
          </div>
          <div className="col-sm-10">
            min <span id="min-temp">-2</span>
            <a href="#top" className="c" id="C-tempMin">°C</a> |
            <a href="#top" className="f" id="F-tempMin">°F</a>
          </div>
          <div className="col-sm-10">
            max <span id="max-temp">+1</span>
            <a href="#top" className="c" id="C-tempMax">°C</a> |
            <a href="#top" className="f" id="F-tempMax">°F</a>
          </div>
        </div>
        </div>
        </div>
       
        
      
    )
  } else {
    const key ="2cc11cocaf0f9420tbdaec31809b2ceb"
  let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${key}&units=metric`
  axios.get(url).then(handleResponse);

  return (
    <div>
      <div className="Form d-flex">
        <form className="container-search" id="city">
          <input type="text" placeholder="Change a city" id="city-input" />
          <button type="submit" className="btn btn-primary" id="search">
            Search
          </button>
          <button type="button" className="btn btn-primary" id="location">
            Location
          </button>
        </form>
      </div>
      <div>Loading...</div>
      <Main />
    </div>
  )
  
  }  
}
