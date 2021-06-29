import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return <div className="App">
<div className="container">  
<Weather defaultCity="Oslo"/>
   
  <footer>
    This project was coded by Liridona Osmani and is open-sourced on {""}
  <a 
  href="https://github.com/lirosm/react.app.weather"
  target="_blank" rel="noopener noreferrer"
  > GitHub
  </a>
  {""} and hosted on <a href="https://dazzling-lamport-4cb53f.netlify.app/" target="_blank" rel="noopener noreferrer">
    Netlify
  </a>
  </footer>
  </div>
</div>;
  
}

 
