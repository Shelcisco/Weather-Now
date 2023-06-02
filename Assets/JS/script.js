var APIkey = 'a21690291032747ea02cca028da03d72';
var cityInput = document.getElementById('location-search');
var submitBtn = document.querySelector('#search-button');
var SearchedCities = [];
// var previousCityEl = document.getElementById('history');
var weatherEl = document.querySelector('.city-info');
var fivedayEl = document.querySelector('#weather-forecast');
var clearSearch =  document.getElementById('clearBtn')



// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "&appid=" + APIKey;
// var WeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + APIkey;

function getApi(city) {
  // fetch request gets a list of all the repos for the node.js organization
 
  
    // var city = cityInput.value;
    // console.log(cityInput)
    var currentDay = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + APIkey;
    fetch(currentDay)
      .then(function (response) {
        if (response.ok) {
          console.log(response.status);
          return response.json();
        }
      })


      .then(function (data) {
       
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey;
        // displayResults(data);
        fiveDayForecast(data);
        // displayCities();
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

function displayResults (currentDay){
  // var currentDay = data.list[i];
  var icon = ("Assets/images/"+currentDay.weather[0].icon+".png");
  var cardHtml = `<h2 id="current-city">${currentDay.name}</h2>
  <img src="${icon}" alt="Weather on this day"></img>
  <p class="mb-0">Temperature: <span id="temp">${currentDay.main.temp} </span></p>
  <p class="mb-0">Wind Speed: ${currentDay.wind.speed} <span id="wind"></span></p>
  <p class="mb-0">Humidity:${currentDay.main.humidity} <span id="humidity"></span></p>`; 
  weatherEl.innerHTML=(cardHtml)
}

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
    
   // console.log(day.add(((i+1)/8),'day').format("DD MMM YYYY")+);
} 
fivedayEl.innerHTML=(cardHtml)
}

//Saving Location to local Storage
//HELP FINISH


var locationA=  JSON.parse(localStorage.getItem("locations")) || [];

// for (let i = 0; i < array.length; i++) {
  
  
// }

// const recentsearches = document.querySelector(".recent-searches")
submitBtn.addEventListener("click", display);

// h4 = document.querySelector("h4");



function display(){
locationA.push(cityInput.value)    
localStorage.setItem('locations', JSON.stringify(locationA))
const newh4= document.createElement("button")
newh4.innerHTML = localStorage.getItem ("locations")
newh4.innerHTML = cityInput.value
newh4.addEventListener("click", () => {
  getApi(cityInput.value);
});
recentsearches.append(newh4)
   }






//Saving Dates to local storage 
  
// const Day= [];
// const input2= document.querySelector("#datepicker");
// const srchBttn2 = document.querySelector("#search-button");

// //  h5 = document.querySelector("h5");
// srchBttn2.addEventListener("click", Days);

// function Days(){
//   Day.push(input2.value)    
//   localStorage.setItem('Date', Day)
//   const newh5= document.createElement("h5")
//   newh5.innerHTML = input2.value
//   recentsearches.append(newh5)
//   }
