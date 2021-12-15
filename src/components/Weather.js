import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"

// function Test(){
//     const [weatherData, setWeatherData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//           console.log(123)
//           const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts/1"
//           );
//             let data = await response.json();
           
//             setWeatherData(data);
//             console.log("Res = ", response);
//             console.log("Data = ", data);
//           }
//           fetchData();
//         //fetchWeatherData();
//     }, []);
//  console.log(weatherData);
//     return (
//         <div className="weather">
//             <p>Vremenski uslovi: {weatherData.title}</p>
//             {/* <p>Vremenski uslovi: {weatherData.current.condition.text}</p>
//             <p>Temperatura: {weatherData.current.temp_c} °C</p>
//             <p>Pritisak: {weatherData.current.pressure_mb} mBar</p>
//             <p>Vlažnost: {weatherData.current.humidity}%</p>
//             <p>Brzina vetra: {weatherData.current.wind_kph} km/h</p> */}
//         </div>
//     )
// }

export default function HackerNews() {
    const [data, setData] = useState({ hits: [] });

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
  
        setData(result.data);
      };
  
      fetchData();
    }, []);
  console.log(data, 123)
    return (
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    );
}
