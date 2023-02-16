//Saving Location and Date to local Storage

const searchHistory = [];

const srchBttn = document.querySelector("#search-button");

srchBttn.addEventListener("click", saveSearch);

function saveSearch(){
  const locationInput = document.querySelector("#location-search").value;
  const dateInput = document.querySelector("#datepicker").value;
  const timestamp = Date.now();
  
  const search = {
    location: locationInput,
    date: dateInput
  };
  
  localStorage.setItem(`search${timestamp}`, JSON.stringify(search));
  searchHistory.push(search);
}
  
 // get locations/dates from local storage
const locations = JSON.parse(localStorage.getItem('Locations')) || [];
const dates = JSON.parse(localStorage.getItem('Date')) || [];

// combine locations and dates 
const combined = [];
for (let i = 0; i < locations.length; i++) {
  const location = locations[i];
  const date = dates[i];
  const combinedStr = `${location} ${date}`;
  combined.push(combinedStr);
 
}

// create new h4 elements for each combined string
const recentSearchesDiv = document.getElementById('recent-searches');
recentSearchesDiv.innerHTML = ''; 
for (let i = 0; i < combined.length; i++) {
  const h4 = document.createElement('h4');
  const text = document.createTextNode(combined[i]);
  h4.appendChild(text);
  h4.classList.add('recent-search');
  h4.addEventListener('click', function() {
    const [location, date] = combined[i].split(' ');
  });
  recentSearchesDiv.appendChild(h4);
  
}


