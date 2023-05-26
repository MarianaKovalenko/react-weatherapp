import React from "react";
import City from "./City";
import Curently from "./Curently";
import "./main.css"

export default function Main() {
  return (
    <div className="Main row justify-content-center">
      <City />
      <Curently />
    </div>
  );
}
