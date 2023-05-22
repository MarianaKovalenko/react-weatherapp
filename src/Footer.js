import React from "react";
import github from "./images/github.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a href="https://github.com/MarianaKovalenko/weatherproject">
        <img id="githubicon" src={github} alt="github-icon" width={20} />
      </a>
      Coded by Mariana Kovalenko
    </div>
  );
}
