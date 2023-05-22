//Global elements
var apiKey = "0094105c713bc17695af1d675f234ed7"
//var apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey
var search = document.querySelector("#searchButton")
var cityInput= document.querySelector("#city")


//Search for a city

function searchCity(e) {
    e.preventDefault();
    var apiGeo = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput.value + "&appid=" + apiKey
    fetch(apiGeo)
    .then(function (response)
    {return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data[0].local_names.es)
    })
}
search.addEventListener("click", searchCity)




//That city's current date, temperature, an icon representation of weather conditions, the humidity, and the the wind speed appear on the screen.

//The 5 day forecast appears in individual cards.

//List searched cities
