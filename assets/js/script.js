//Global elements
var apiKey = "0094105c713bc17695af1d675f234ed7";
var search = document.querySelector("#searchButton");
var cityInput = document.querySelector("#city");

//Search for a city

function searchCity(e) {
  e.preventDefault();
  var apiURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput.value +
    "&appid=" +
    apiKey + "&units=imperial";
  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
search.addEventListener("click", searchCity);

//That city's current date, temperature, an icon representation of weather conditions, the humidity, and the the wind speed appear on the screen.

function displayCurrent (data) {
    //current temperature
    var currentTemp = data.main[0];
    var currentTempDiv = document.querySelector("temperatureCurrent");
    //current humidity
    var currentHum = data.main[1];
    var currentHumDiv = document.querySelector("humidityCurrent");
    //currentW wind speed
    var currentWind = data.wind[1];
    var currentWindDiv = document.querySelector("windSpeedCurrent");
    

}



//The 5 day forecast appears in individual cards.

//List searched cities
