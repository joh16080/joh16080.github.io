//connection to the API//
let weatherRequest = new XMLHttpRequest();
let apiURL = 'https://api.openweathermap.org/data/2.5/weather?&id=4156210&units=imperial&APPID=7ae51efa9b789abd3dfb69401f1cce74';
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function() {
  let weatherData = JSON.parse(weatherRequest.responseText);
  
  console.log(weatherData);
 
  document.getElementById('hightemp').innerHTML =  weatherData.main.temp_max;
  
  document.getElementById('lowtemp').innerHTML =  weatherData.main.temp_min;
  
  document.getElementById('humidity').innerHTML =  weatherData.main.humidity;
  
  document.getElementById('windspeed').innerHTML =  weatherData.wind.speed;
  
  document.getElementById('pressure').innerHTML =  weatherData.main.pressure;
  
  document.getElementById('winddirection').innerHTML =  weatherData.wind.deg;
  
  document.getElementById('clouds').innerHTML =  weatherData.clouds;
  
  let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
  document.getElementById('weatherimage').src = imagesrc;
  
}
