import React from "react";
import "./Weather.css";
export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
             <div className="col-9"> 
            <input 
            type="search" 
            placeholder="City..." 
            className="form-control"
            autoFocus="on"
            /> 
            </div>  
        <div className="col-3">
             <input 
            type="submit" 
            value="search"
            className="btn btn-primary w-100" 
            />
           </div> 
         </div>
        </form>
        <h1>Oslo</h1>
        <ul>
            <li>Saturday 14:13</li>
            <li>Mostly Couldy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
        <img 
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="weather-icon" 
        className="float-left"
        />
        <div className="float-left">
        <span className="temp">25</span>
        <span className="unit">°C</span>
        </div>
    </div>
      </div>   
         <div className="col-6">
             <ul>
                 <li>Precipitation: 0%</li>
                 <li>Humidity: 44%</li>
                 <li>Wind: 4 m/s</li>
             </ul>
             </div>    
        </div>



</div>;
    
}
