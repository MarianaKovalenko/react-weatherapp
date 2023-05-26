import React from "react";

import "./styles.css";

import Header from "./header.js";
import Form from "./Form.js";
import Forecast from "./Forecast";
import Footer from "./Footer";
import background from "./images/kyivimg.jpg";
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`
      }}
    >
      <Header />
      <Form defaultCity="Poltava"/>
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
