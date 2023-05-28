var APIkey = 'a21690291032747ea02cca028da03d72';
var cityInput = document.getElementById('city-input');
// var submitBtn = document.querySelector('.btn');
var SearchedCities = [];
// var previousCityEl = document.getElementById('history');
var weatherEl = document.querySelector('#results');
var fivedayEl = document.querySelector('.five-day');
var clearSearch =  document.getElementById('clearBtn')


// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "&appid=" + APIKey;
// var WeatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputValue.value + APIkey;

function getApi() {
  // fetch request gets a list of all the repos for the node.js organization
 
  
    var city = cityInput.value;
    var currentDay = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + APIkey;
    fetch(currentDay)
      .then(function (response) {
        if (response.ok) {
          console.log(response.status);
          return response.json();
        }
      })
      .then(function (data) {
        console.log(data);
        displayResults(data);
        fiveDayForecast(data);
        displayCities();
      }); 
};






//Saving Location to local Storage

// const Location= [];
// const input= document.querySelector("#location-search");
// const srchBttn = document.querySelector("#search-button");
// const recentsearches = document.querySelector(".recent-searches")

// // h4 = document.querySelector("h4");

// srchBttn.addEventListener("click", display);

// function display(){
//   Location.push(input.value)    
//   localStorage.setItem('Locations', Location)
//   const newh4= document.createElement("h4")
//   // newh4.innerHTML = localStorage.getItem ("Locations")
//   newh4.innerHTML = input.value
// recentsearches.append(newh4)
//   }


//   //Saving Dates to local storage 
  
//   const Day= [];
// const input2= document.querySelector("#datepicker");
// const srchBttn2 = document.querySelector("#search-button");

// // h5 = document.querySelector("h5");

// srchBttn2.addEventListener("click", Days);

// function Days(){
//   Day.push(input2.value)    
//   localStorage.setItem('Date', Day)
//   const newh5= document.createElement("h5")
//   newh5.innerHTML = input2.value
//   recentsearches.append(newh5)
//   }
