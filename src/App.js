import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
       <div className="container">
      <Weather defaultCity="Johor Bahru" />
      <footer>
        This project was coded by Farah and is 
        <a href="https://github.com/faranora21/react-weather-app" target="_blank" rel="noreferrer" > open-sourced on GitHub</a>
      </footer>
      </div>
    </div>
  );
}
