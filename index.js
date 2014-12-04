"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var main = document.getElementById('main');
main.addEventListener('click', main_clicks);
var mainCount = 0;
var wonderOne = document.getElementById('wonderOne');
wonderOne.addEventListener('click', one_clicks);
var oneCount = 0;
var wonderTwo = document.getElementById('wonderTwo');
wonderTwo.addEventListener('click', two_clicks);
var twoCount = 0;
var wonderThree = document.getElementById('wonderThree');
wonderThree.addEventListener('click', three_clicks);
var threeCount = 0;
var wonderFour = document.getElementById('wonderFour');
wonderFour.addEventListener('click', four_clicks);
var fourCount = 0;
var wonderFive = document.getElementById('wonderFive');
wonderFive.addEventListener('click', five_clicks);
var fiveCount = 0;
var wonderSix = document.getElementById('wonderSix');
wonderSix.addEventListener('click', six_clicks);
var sixCount = 0;
var wonderSeven = document.getElementById('wonderSeven');
wonderSeven.addEventListener('click', seven_clicks);
var sevenCount = 0;

var counter = document.getElementById('NumberOfClicks');

//this is an example of sequential factoring:
function main_clicks() {
	counter.innerHTML = mainCount;
	mainCount = mainCount + 1;
}
function one_clicks() {
	counter.innerHTML = oneCount;
	oneCount = oneCount + 1;
}
function two_clicks() {
	counter.innerHTML = twoCount;
	twoCount = twoCount + 1;
}
function three_clicks() {
	counter.innerHTML = threeCount;
	threeCount = threeCount + 1;
}
function four_clicks() {
	counter.innerHTML = fourCount;
	fourCount = fourCount + 1;
}
function five_clicks() {
	counter.innerHTML = fiveCount;
	fiveCount = fiveCount + 1;
}
function six_clicks() {
	counter.innerHTML = sixCount;
	sixCount = sixCount + 1;
}
function seven_clicks() {
	counter.innerHTML = sevenCount;
	sevenCount = sevenCount + 1;
}