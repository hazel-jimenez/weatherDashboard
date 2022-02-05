// Global Variables //
var apiKey = "6193f46f0e9c03ae7f8a936482891767";
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");
var container = document.getElementById("container");


// search button //
searchBtnEl.addEventListener("click", clickMe);
function clickMe() {
  getApi(searchInputEl.value);
}

// API keys //
function getApi(city) {
  var currentWthrUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apiKey;

  fetch(currentWthrUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        // current date
        var currentDate = new Date

      //city name
       var cityName = document.createElement("h2");
       cityName.textContent = data.name + " " + currentDate.toLocaleDateString() 

       //current weather icon
    
      document.querySelector("#currentIcon").setAttribute("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png")

      //create li emelemt to hold data
      var currentHumidity = document.createElement("li");
      var currentTemp = document.createElement("li");
      var currentUvi = document.createElement("li");
      //set text content of li element
      currentHumidity.textContent = "humidity:" + data.main.humidity;
      currentTemp.textContent = "temp:" + data.main.temp;
      // currentUvi.textContent = "UV:" + data.main.uvi;

      //create ul to hold li element 
      var displayText = document.createElement("ul")
      displayText.appendChild(currentHumidity);
      displayText.appendChild(currentTemp);
      // displayText.appendChild(currentUvi);
      //appending to container on html
      // container.appendChild(icon);
      container.appendChild(cityName);
      container.appendChild(displayText);
     

      console.log(data);
      // console.log(data);
      getOneCall(data.coord.lat, data.coord.lon);
    });
}

function getOneCall(lat, lon) {
  var currentWthrUrl =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=` + apiKey;

  fetch(currentWthrUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      //current day




      //forcast
      console.log(data)
    });
}
