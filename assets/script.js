var apiKey = "6193f46f0e9c03ae7f8a936482891767";
var searchBtnEl = document.getElementById("search-btn");
var searchInputEl = document.getElementById("search-input");

searchBtnEl.addEventListener("click", clickMe);
function clickMe() {
  getApi(searchInputEl.value);
}

function getApi(city) {
  var currentWthrUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apiKey;

  fetch(currentWthrUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
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
      console.log(data);
    });
}
