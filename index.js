"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var main = document.getElementById('main');
var mainCounter = document.getELementById('mainCounter');
main.addEventListener('click', main_clicks);
var wonderOne = document.getElementById('wonderOne');
var wonderTwo = document.getElementById('wonderTwo');
var wonderThree = document.getElementById('wonderThree');
var wonderFour = document.getElementById('wonderFour');
var wonderFive = document.getElementById('wonderFive');
var wonderSix = document.getElementById('wonderSix');
var wonderSeven = document.getElementById('wonderSeven');

var count = 1;

function main_clicks() {
	mainCounter.innerHTML = count;
	count = count + 1;
}