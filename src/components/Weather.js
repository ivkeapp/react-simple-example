import React from 'react'
import {useState, useEffect} from "react"

export default function Weather() {

    const [weatherData, setWeatherData] = useState([]);

    const fetchWeatherData = async () =>  {
        return await fetch("https://api.openweathermap.org/data/2.5/weather?q=Belgrade&units=metric&lang=hr&appid=f2b96f6f33777b4db1b2214c6e17db22")
              .then((response) => response.json())
              .then((data) => {setWeatherData(data); console.log(data)});
      }
    
    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <div className="weather"><p>Vremenski uslovi: &nbsp;
            {
                weatherData.weather.map((item, index) => (
                    item.description.charAt(0).toUpperCase() +  item.description.slice(1) + ", "
                ))
            }</p>
            <p>Temperatura: {weatherData.main.temp} °C</p>
            <p>Subjektivni osećaj: {weatherData.main.feels_like} °C</p>
            <p>Pritisak: {weatherData.main.pressure} mBar</p>
            <p>Vlažnost: {weatherData.main.humidity}%</p>
            <p>Brzina vetra: {weatherData.wind.speed} m/s</p>
        </div>
    )
}
