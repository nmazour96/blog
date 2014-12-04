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


/*Star variable names and ids are star-starNumber-postNumber-wonderLetter*/
var starOneOneC = document.getElementById('starOneOneC');
starOneOneC.addEventListener('click', one_starOneC);
var starOneOneFC = document.getElementById('starOneOneFC');
starOneOneFC.style.display = 'none';
var starTwoOneC = document.getElementById('starTwoOneC');
starTwoOneC.addEventListener('click', one_starTwoC);
var starTwoOneFC = document.getElementById('starTwoOneFC');
starTwoOneFC.style.display = 'none';
var starThreeOneC = document.getElementById('starThreeOneC');
starThreeOneC.addEventListener('click', one_starThreeC);
var starThreeOneFC = document.getElementById('starThreeOneFC');
starThreeOneFC.style.display = 'none';
var starFourOneC = document.getElementById('starFourOneC');
starFourOneC.addEventListener('click', one_starFourC);
var starFourOneFC = document.getElementById('starFourOneFC');
starFourOneFC.style.display = 'none';
var starFiveOneC = document.getElementById('starFiveOneC');
starFiveOneC.addEventListener('click', one_starFiveC);
var starFiveOneFC = document.getElementById('starFiveOneFC');
starFiveOneFC.style.display = 'none';

function one_starOneC() {
	starOneOneC.style.display = 'none';
	starOneOneFC.style.display = 'block';
}
function one_starTwoC() {
	starTwoOneC.style.display = 'none';
	starTwoOneFC.style.display = 'block';
}
function one_starThreeC() {
	starThreeOneC.style.display = 'none';
	starThreeOneFC.style.display = 'block';
}
function one_starFourC() {
	starFourOneC.style.display = 'none';
	starFourOneFC.style.display = 'block';
}
function one_starFiveC() {
	starFiveOneC.style.display = 'none';
	starFiveOneFC.style.display = 'block';
}