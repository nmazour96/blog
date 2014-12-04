"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var wonderOne = document.getElementById('wonderOne');
wonderOne.addEventListener('click', number_of_clicks);
var wonderTwo = document.getElementById('wonderTwo');
wonderTwo.addEventListener('click', number_of_clicks);
var wonderThree = document.getElementById('wonderThree');
wonderThree.addEventListener('click', number_of_clicks);
var wonderFour = document.getElementById('wonderFour');
wonderFour.addEventListener('click', number_of_clicks);
var wonderFive = document.getElementById('wonderFive');
wonderFive.addEventListener('click', number_of_clicks);
var wonderSix = document.getElementById('wonderSix');
wonderSix.addEventListener('click', number_of_clicks);
var wonderSeven = document.getElementById('wonderSeven');
wonderSeven.addEventListener('click', number_of_clicks);

var counter = document.getElementById('');

function number_of_clicks() {
	var count = 0;
	counter.innerHTML = count;
	count = count + 1;
}