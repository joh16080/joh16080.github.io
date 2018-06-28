
var daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
var months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
var d = new Date();
var dayName = daynames[d.getDay()];
var monthName = months[d.getMonth()];
var getDate = d.getDate();
var year = d.getFullYear();
var fulldate = dayName + ",  " + monthName + "  " + getDate + ",  " + year;
document.getElementById("currentdate").innerHTML = fulldate;