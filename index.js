"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var main = document.getElementById('main');
var wonderOne = document.getElementById('wonderOne');
var wonderTwo = document.getElementById('wonderTwo');
var wonderThree = document.getElementById('wonderThree');
var wonderFour = document.getElementById('wonderFour');
var wonderFive = document.getElementById('wonderFive');
var wonderSix = document.getElementById('wonderSix');
var wonderSeven = document.getElementById('wonderSeven');

var upOneC = document.getElementById('upOneC');
upOneC.addEventListener('click', UpOneC);
var upTwoC = document.getElementById('upTwoC');
upTwoC.addEventListener('click', UpTwoC);
var upThreeC = document.getElementById('upThreeC');
upThreeC.addEventListener('click', UpThreeC);
var upFourC = document.getElementById('upFourC');
upFourC.addEventListener('click', UpFourC);
var upFiveC = document.getElementById('upFiveC');
upFiveC.addEventListener('click', UpFiveC);

var downOneC = document.getElementById('downOneC');
downOneC.addEventListener('click', DownOneC);
var downTwoC = document.getElementById('downTwoC');
downTwoC.addEventListener('click', DownTwoC);
var downThreeC = document.getElementById('downThreeC');
downThreeC.addEventListener('click', DownThreeC);
var downFourC = document.getElementById('downFourC');
downFourC.addEventListener('click', DownFourC);
var downFiveC = document.getElementById('downFiveC');
downFiveC.addEventListener('click', DownFiveC);

function UpOneC() {
	upOneC.style.color = '#071';
	upOneC.removeEventListener('click', UpOneC);
	downOneC.removeEventListener('click', DownOneC);
}
function UpTwoC() {
	upTwoC.style.color = '#071';
	upTwoC.removeEventListener('click', UpTwoC);
	downTwoC.removeEventListener('click', DownTwoC);
}
function UpThreeC() {
	upThreeC.style.color = '#071';
	upThreeC.removeEventListener('click', UpThreeC);
	downThreeC.removeEventListener('click', DownThreeC);
}
function UpFourC() {
	upFourC.style.color = '#071';
	upFourC.removeEventListener('click', UpFourC);
	downFourC.removeEventListener('click', DownFourC);
}
function UpFiveC() {
	upFiveC.style.color = '#071';
	upFiveC.removeEventListener('click', UpFiveC);
	downFiveC.removeEventListener('click', DownFiveC);
}

function DownOneC() {
	downOneC.style.color = '#F00';
	upOneC.removeEventListener('click', UpOneC);
	downOneC.removeEventListener('click', DownOneC);
}
function DownTwoC() {
	downTwoC.style.color = '#F00';
	upTwoC.removeEventListener('click', UpTwoC);
	downTwoC.removeEventListener('click', DownTwoC);
}
function DownThreeC() {
	downThreeC.style.color = '#F00';
	upThreeC.removeEventListener('click', UpThreeC);
	downThreeC.removeEventListener('click', DownThreeC);
}
function DownFourC() {
	downFourC.style.color = '#F00';
	upFourC.removeEventListener('click', UpFourC);
	downFourC.removeEventListener('click', DownFourC);
}
function DownFiveC() {
	downFiveC.style.color = '#F00';
	upFiveC.removeEventListener('click', UpFiveC);
	downFiveC.removeEventListener('click', DownFiveC);
}