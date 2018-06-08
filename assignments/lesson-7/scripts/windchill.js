var hightemp = parseInt(document.getElementById("hightemp").innerHTML);

var lowtemp = parseInt(document.getElementById("lowtemp").innerHTML);

var windspeed = parseInt(document.getElementById("windspeed").innerHTML);

var thetemp = hightemp + lowtemp / 2;

var windchill = windchillfactor(thetemp, windspeed);

document.getElementById("windchill").innerHTML = windchillfactor;

function windchillfactor(thetemp, windspeed){
var windchill = 35.74 + (0.6215 * thetemp) - 35.75 * (Math.pow(windspeed, 0.16)) + 0.4275 * tempF * (Math.pow(windspeed, 0.16));
return windchillfactor;
}