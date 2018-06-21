//connection to the API//
let weatherRequest = new XMLHttpRequest();
let apiURL = 'http://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=7ae51efa9b789abd3dfb69401f1cce74';
weatherRequest.open(GET, apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  console.log(weatherData);
}

let weatherSection = document.querySelector('');


//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={7ae51efa9b789abd3dfb69401f1cce74}//