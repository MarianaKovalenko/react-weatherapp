import React from "react";

export default function FormatDate(props){
    let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let day = days[props.currentDate.getDay()];
    let hour = props.currentDate.getHours();
    let minute = props.currentDate.getMinutes();
    if(hour < 10){
        hour = `0${hour}`
    };
    if(minute < 10){
        minute = `0${minute}`
    };
    return(

        <div className="FormatDate">
            {day} {hour}:{minute}
        </div>
    )
}