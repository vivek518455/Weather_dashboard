async function getWeather(){

let city=document.getElementById("city").value;

let apiKey="6d454151cfb0975f28005f498dade8bc";

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response=await fetch(url);

let data=await response.json();

document.getElementById("result").innerHTML=
`
Temperature: ${data.main.temp} °C <br>
Humidity: ${data.main.humidity}% <br>
Weather: ${data.weather[0].main}
`;

}
