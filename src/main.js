import React from "react";
import City from "./City";
import Curently from "./Curently";
import "./main.css"

export default function Main() {
  return (
    <div className="Main">
      <City />
      <Curently />
    </div>
  );
}
