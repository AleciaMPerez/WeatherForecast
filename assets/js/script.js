//Global elements
var apiKey = "0094105c713bc17695af1d675f234ed7";
var search = document.querySelector("#searchButton");
var cityInput = document.querySelector("#city");
var fiveDayArray = [];

//Search for a city and data

function searchCity(e) {
  e.preventDefault();
  var apicurrentURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput.value +
    "&appid=" +
    apiKey +
    "&units=imperial";

  // pulls the data
  fetch(apicurrentURL)
    .then(function (response) {
      return response.json();
    })
    // displays the data
    .then(function (data) {
      console.log(data);
      displayCurrent(data);
      //runs the forecast function
      forecast();
    });
}

function forecast() {
  //URL from where the data is pulled
  var fiveDayForecastURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityInput.value +
    "&appid=" +
    apiKey +
    "&units=imperial";
  //fetches the data
  fetch(fiveDayForecastURL)
    .then(function (response) {
      return response.json();
    })
    //displays the data
    .then(function (data) {
      //run a for loop for pulling increments of 8
      for (let i = 0; i < data.list.length; i += 8) {
        //index of 8 and pushing it through the fiveDayArray so that it pulls the increments of 8 that will be used for the specific days from data.list
        fiveDayArray.push(data.list[i]);
      }
      console.log(fiveDayArray);
    })
    //calls the fivedayforecast function
    .then(function () {
      fiveDayForecast();
    });
}

search.addEventListener("click", searchCity);

//current temperature
function displayCurrent(data) {
  document.getElementById("currentDate").innerHTML = dayjs(Date.now()).format('MM/DD/YYYY')
  document.getElementById("currentTemp").innerHTML =
    "Temperature: " + data.main.temp + "&deg;F";
  document.getElementById("currentHum").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.getElementById("currentSpeed").innerHTML =
    "Wind Speed: " + data.wind.speed + "mph";
}

//The 5 day forecast appears in individual cards.
function fiveDayForecast() {
  document.getElementById("day1").innerHTML = dayjs(fiveDayArray[0].dt_txt).format('MM/DD/YYYY')
  document.getElementById("temp1").innerHTML =
    "Temperature: " + fiveDayArray[0].main.temp + "&deg;F";
  document.getElementById("hum1").innerHTML =
    "Humidity: " + fiveDayArray[0].main.humidity + "%";
  document.getElementById("speed1").innerHTML =
    "Wind Speed: " + fiveDayArray[0].wind.speed + "mph";

    document.getElementById("day2").innerHTML = dayjs(fiveDayArray[1].dt_txt).format('MM/DD/YYYY')
    document.getElementById("temp2").innerHTML =
    "Temperature: " + fiveDayArray[1].main.temp + "&deg;F";
  document.getElementById("hum2").innerHTML =
    "Humidity: " + fiveDayArray[1].main.humidity + "%";
  document.getElementById("speed2").innerHTML =
    "Wind Speed: " + fiveDayArray[1].wind.speed + "mph";


    document.getElementById("day3").innerHTML = dayjs(fiveDayArray[2].dt_txt).format('MM/DD/YYYY')
    document.getElementById("temp3").innerHTML =
    "Temperature: " + fiveDayArray[2].main.temp + "&deg;F";
  document.getElementById("hum3").innerHTML =
    "Humidity: " + fiveDayArray[2].main.humidity + "%";
  document.getElementById("speed3").innerHTML =
    "Wind Speed: " + fiveDayArray[2].wind.speed + "mph";


    document.getElementById("day4").innerHTML = dayjs(fiveDayArray[3].dt_txt).format('MM/DD/YYYY')
    document.getElementById("temp4").innerHTML =
    "Temperature: " + fiveDayArray[3].main.temp + "&deg;F";
  document.getElementById("hum4").innerHTML =
    "Humidity: " + fiveDayArray[3].main.humidity + "%";
  document.getElementById("speed4").innerHTML =
    "Wind Speed: " + fiveDayArray[3].wind.speed + "mph";


    document.getElementById("day5").innerHTML = dayjs(fiveDayArray[4].dt_txt).format('MM/DD/YYYY')
    document.getElementById("temp5").innerHTML =
    "Temperature: " + fiveDayArray[4].main.temp + "&deg;F";
  document.getElementById("hum5").innerHTML =
    "Humidity: " + fiveDayArray[4].main.humidity + "%";
  document.getElementById("speed5").innerHTML =
    "Wind Speed: " + fiveDayArray[4].wind.speed + "mph";
}

