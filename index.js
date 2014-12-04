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
starTwoOneC.addEventListener('click', two_starsOneC);
var starTwoOneFC = document.getElementById('starTwoOneFC');
starTwoOneFC.style.display = 'none';
var starThreeOneC = document.getElementById('starThreeOneC');
starThreeOneC.addEventListener('click', three_starsOneC);
var starThreeOneFC = document.getElementById('starThreeOneFC');
starThreeOneFC.style.display = 'none';
var starFourOneC = document.getElementById('starFourOneC');
starFourOneC.addEventListener('click', four_starsOneC);
var starFourOneFC = document.getElementById('starFourOneFC');
starFourOneFC.style.display = 'none';
var starFiveOneC = document.getElementById('starFiveOneC');
starFiveOneC.addEventListener('click', five_starsOneC);
var starFiveOneFC = document.getElementById('starFiveOneFC');
starFiveOneFC.style.display = 'none';

var ratingOneC = document.getElementById('ratingOneC');

function one_starOneC() {
	starOneOneC.style.display = 'none';
	starOneOneFC.style.display = 'inline-block';
	ratingOneC.innerHTML = '1 STAR';
	starOneOneC.addEventListener('click', one_starOneC);
	starTwoOneC.addEventListener('click', two_starsOneC);
	starThreeOneC.addEventListener('click', three_starsOneC);
	starFourOneC.addEventListener('click', four_starsOneC);
	starFiveOneC.addEventListener('click', five_starsOneC);
}
function two_starsOneC() {
	starTwoOneC.style.display = 'none';
	starOneOneC.style.display = 'none';
	starTwoOneFC.style.display = 'inline-block';
	starOneOneFC.style.display = 'inline-block';
	ratingOneC.innerHTML = '2 STARS';
	starOneOneC.addEventListener('click', one_starOneC);
	starTwoOneC.addEventListener('click', two_starsOneC);
	starThreeOneC.addEventListener('click', three_starsOneC);
	starFourOneC.addEventListener('click', four_starsOneC);
	starFiveOneC.addEventListener('click', five_starsOneC);
}
function three_starsOneC() {
	starThreeOneC.style.display = 'none';
	starTwoOneC.style.display = 'none';
	starOneOneC.style.display = 'none';
	starThreeOneFC.style.display = 'inline-block';
	starTwoOneFC.style.display = 'inline-block';
	starOneOneFC.style.display = 'inline-block';
	ratingOneC.innerHTML = '3 STARS';
	starOneOneC.addEventListener('click', one_starOneC);
	starTwoOneC.addEventListener('click', two_starsOneC);
	starThreeOneC.addEventListener('click', three_starsOneC);
	starFourOneC.addEventListener('click', four_starsOneC);
	starFiveOneC.addEventListener('click', five_starsOneC);
}
function four_starsOneC() {
	starFourOneC.style.display = 'none';
	starThreeOneC.style.display = 'none';
	starTwoOneC.style.display = 'none';
	starOneOneC.style.display = 'none';
	starFourOneFC.style.display = 'inline-block';
	starThreeOneFC.style.display = 'inline-block';
	starTwoOneFC.style.display = 'inline-block';
	starOneOneFC.style.display = 'inline-block';
	ratingOneC.innerHTML = '4 STARS';
	starOneOneC.addEventListener('click', one_starOneC);
	starTwoOneC.addEventListener('click', two_starsOneC);
	starThreeOneC.addEventListener('click', three_starsOneC);
	starFourOneC.addEventListener('click', four_starsOneC);
	starFiveOneC.addEventListener('click', five_starsOneC);
}
function five_starsOneC() {
	starFiveOneC.style.display = 'none';
	starFourOneC.style.display = 'none';
	starThreeOneC.style.display = 'none';
	starTwoOneC.style.display = 'none';
	starOneOneC.style.display = 'none';
	starFiveOneFC.style.display = 'inline-block';
	starFourOneFC.style.display = 'inline-block';
	starThreeOneFC.style.display = 'inline-block';
	starTwoOneFC.style.display = 'inline-block';
	starOneOneFC.style.display = 'inline-block';
	ratingOneC.innerHTML = '5 STARS';
	starOneOneC.addEventListener('click', one_starOneC);
	starTwoOneC.addEventListener('click', two_starsOneC);
	starThreeOneC.addEventListener('click', three_starsOneC);
	starFourOneC.addEventListener('click', four_starsOneC);
	starFiveOneC.addEventListener('click', five_starsOneC);
}