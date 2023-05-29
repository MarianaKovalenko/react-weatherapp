import React, { useState } from "react";

export default function UnitTemp(props){
    const[unit, setUnit] = useState("metrics");
    function convertFahrenheit(event){
        event.preventDefault();
        setUnit("imperial");
    }
    function convertCelsius(event){
        event.preventDefault();
        setUnit("metrics");
    }
    if(unit === "metrics"){
        return(
            <div className="UnitTemp">
                <span id="curent-temp">{Math.round(props.celc)}</span>
                <span className="unit">
                <a href="/" className="c" id="C-temp">°C</a> |
                <a href="/" className="f" id="F-temp"onclick={convertFahrenheit}>°F</a>
                </span>
            </div>
        )

    } else {
        let imperialTemp = Math.round((props.cels)*9/5+32);
        return(
            <div className="UnitTemp">
                <span id="curent-temp">{imperialTemp}</span>
                <span className="unit">
                <a href="/" className="c" id="C-temp" onclick={convertCelsius}>°C</a> |
                <a href="/" className="f" id="F-temp">°F</a>
                </span>
            </div>
        )
    }
    
}