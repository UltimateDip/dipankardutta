import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";

function App() {
  const [currentTime, setTime] = useState(Date.now());
  const specificDate = new Date('2024-08-04T18:48:00.000Z'); 
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = Math.floor((currentTime - specificDate.getTime())/1000) + 5*60*60 + 30*60; // 5 hours and 30 minutes UTC to IST

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="custom-text">Alive {diff}</p>
      </header>
    </div>
  );
}

export default App;
