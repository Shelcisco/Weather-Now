var APIkey = 'a21690291032747ea02cca028da03d72';
var cityInput = document.getElementById('location-search');
var submitBtn = document.querySelector('#search-button');
var SearchedCities = [];
var weatherEl = document.querySelector('.city-info');
var fivedayEl = document.querySelector('#weather-forecast');
var clearSearch =  document.getElementById('clearBtn')


//CALL API TO GET WEATHER DATA

 //Get current day forecast data
function getApi(city) {

    var currentDay = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + APIkey;
    fetch(currentDay)
      .then(function (response) {
        if (response.ok) {
          console.log(response.status);
          return response.json();
        }
      })

//Get 5 day Forecast data
      .then(function (data) {
       
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
        fiveDayForecast(data);
        fetch(queryURL)
      .then(function (response) {
        if (response.ok) {
          console.log(response.status);
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data);
         displayResults(data);
        
      })
    })
};

submitBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  getApi(cityInput.value);
})

//display current day forecast info
function displayResults (currentDay){
  var icon = ("Assets/images/"+currentDay.weather[0].icon+".png");
  var cardHtml = `<h2 id="current-city">${currentDay.name}</h2>
  <img src="${icon}" alt="Weather on this day"></img>
  <p class="mb-0">Temperature: <span id="temp">${currentDay.main.temp} </span></p>
  <p class="mb-0">Wind Speed: ${currentDay.wind.speed} <span id="wind"></span></p>
  <p class="mb-0">Humidity:${currentDay.main.humidity} <span id="humidity"></span></p>`; 
  weatherEl.innerHTML=(cardHtml)
}

//Display five day forecast info
function  fiveDayForecast(data){
  var cardHtml = "";
  for (var i = 0; i < data.list.length; i += 8) {
    var currentDay = data.list[i];
    var icon = ("Assets/images/"+data.list[i].weather[0].icon+".png");
    cardHtml+=`<div class="col-2">
    <div class="card"><div class="card-body">
    <img src="${icon}" alt="Weather on this day"></img>
    <p class="card-text mb-0">Temp:${currentDay.main.temp} </p>
    <p class="cart-text mb-0">Wind: ${currentDay.wind.speed} </p>
    <p class="card-text mb-0">Humidity:${currentDay.main.humidity}  </p>
</div> </div></div>`
    
  
} 
fivedayEl.innerHTML=(cardHtml)
}

//Saving Location to local Storage
//HELP FINISH

// RECENT SEARCHES

//Parse Data to show single search
var locationA=  JSON.parse(localStorage.getItem("locations")) || [];
  
//Event Listener 
const recentsearches = document.querySelector(".recent-searches")
submitBtn.addEventListener("click", display);

//Function to display recent search buttons + to make them functional (searching for city name listed on button)

function display(){
locationA.push(cityInput.value)    
localStorage.setItem('locations', JSON.stringify(locationA))
const newh4= document.createElement("button")
newh4.innerHTML = localStorage.getItem ("locations")
newh4.innerHTML = cityInput.value
newh4.addEventListener("click", (e) => {
  getApi(e.target.textContent);
});
recentsearches.append(newh4)
   }




