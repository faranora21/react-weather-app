import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return(
        <div className="WeatherInfo">
        <h1>{props.data.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="weatherDescription">{props.data.description}</li>
      </ul>

      <div className="row">
        <div className="col-6">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
          <span className="temperature">{Math.round(props.data.temp)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
      </div>
    )
}