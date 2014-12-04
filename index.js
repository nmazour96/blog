"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var main = document.getElementById('main');
main.addEventListener('click', clicks);
var wonderOne = document.getElementById('wonderOne');
wonderOne.addEventListener('click', clicks);
var wonderTwo = document.getElementById('wonderTwo');
wonderTwo.addEventListener('click', clicks);
var wonderThree = document.getElementById('wonderThree');
wonderThree.addEventListener('click', clicks);
var wonderFour = document.getElementById('wonderFour');
wonderFour.addEventListener('click', clicks);
var wonderFive = document.getElementById('wonderFive');
wonderFive.addEventListener('click', clicks);
var wonderSix = document.getElementById('wonderSix');
wonderSix.addEventListener('click', clicks);
var wonderSeven = document.getElementById('wonderSeven');
wonderSeven.addEventListener('click', clicks);

var count = 1;
var counter = document.getElementById('NumberOfClicks');

//this is an example of sequential factoring:
function clicks() {
	counter.innerHTML = count;
	count = count + 1;
}