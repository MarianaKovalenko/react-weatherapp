import React from "react";
import snowflake from "./images/snowflake.gif";

export default function Curently() {
  return (
    <div className="Curently">
      <div className="column">
        <div class="col-sm-10">
          <h2 id="top">Curently</h2>
        </div>
        <div className="col-sm-10">
          <span id="curent-temp">-1</span>
          <a href="#top" className="c" id="C-temp">
            °C
          </a>{" "}
          |
          <a href="#top" className="f" id="F-temp">
            °F
          </a>
        </div>
        <div className="col-sm-10">
          <img id="icon" src={snowflake} alt="snowflake" width="48px" />
        </div>
        <div className="col-sm-10">
          min <span id="min-temp">-2</span>
          <a href="#top" className="c" id="C-tempMin">
            °C
          </a>{" "}
          |
          <a href="#top" className="f" id="F-tempMin">
            °F
          </a>
        </div>
        <div className="col-sm-10">
          max <span id="max-temp">+1</span>
          <a href="#top" className="c" id="C-tempMax">
            °C
          </a>{" "}
          |
          <a href="#top" className="f" id="F-tempMax">
            °F
          </a>
        </div>
      </div>
    </div>
  );
}
