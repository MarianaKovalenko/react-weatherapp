import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="container-search" id="city">
        <input type="text" placeholder="Change a city" id="city-input" />
        <button type="submit" class="btn btn-primary" id="search">
          Search
        </button>
        <button type="button" class="btn btn-primary" id="location">
          Location
        </button>
      </form>
    </div>
  );
}
