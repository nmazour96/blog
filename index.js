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

var CROne = document.getElementById('CROne');
CROne.style.display = 'none';
var CRTwo = document.getElementById('CRTwo');
CRTwo.style.display = 'none';
var CRThree = document.getElementById('CRThree');
CRThree.style.display = 'none';
var CRFour = document.getElementById('CRFour');
CRFour.style.display = 'none';
var CRFive = document.getElementById('CRFive');
CRFive.style.display = 'none';

var GWOne = document.getElementById('GWOne');
GWOne.style.display = 'none';
var GWTwo = document.getElementById('GWTwo');
GWTwo.style.display = 'none';
var GWThree = document.getElementById('GWThree');
GWThree.style.display = 'none';
var GWFour = document.getElementById('GWFour');
GWFour.style.display = 'none';
var GWFive = document.getElementById('GWFive');
GWFive.style.display = 'none';

var POne = document.getElementById('POne');
POne.style.display = 'none';
var PTwo = document.getElementById('PTwo');
PTwo.style.display = 'none';
var PThree = document.getElementById('PThree');
PThree.style.display = 'none';
var PFour = document.getElementById('PFour');
PFour.style.display = 'none';
var PFive = document.getElementById('PFive');
PFive.style.display = 'none';

var COne = document.getElementById('COne');
COne.style.display = 'none';
var CTwo = document.getElementById('CTwo');
CTwo.style.display = 'none';
var CThree = document.getElementById('CThree');
CThree.style.display = 'none';
var CFour = document.getElementById('CFour');
CFour.style.display = 'none';
var CFive = document.getElementById('CFive');
CFive.style.display = 'none';

var CIOne = document.getElementById('CIOne');
CIOne.style.display = 'none';
var CITwo = document.getElementById('CITwo');
CITwo.style.display = 'none';
var CIThree = document.getElementById('CIThree');
CIThree.style.display = 'none';
var CIFour = document.getElementById('CIFour');
CIFour.style.display = 'none';
var CIFive = document.getElementById('CIFive');
CIFive.style.display = 'none';

var MPOne = document.getElementById('MPOne');
MPOne.style.display = 'none';
var MPTwo = document.getElementById('MPTwo');
MPTwo.style.display = 'none';
var MPThree = document.getElementById('MPThree');
MPThree.style.display = 'none';
var MPFour = document.getElementById('MPFour');
MPFour.style.display = 'none';
var MPFive = document.getElementById('MPFive');
MPFive.style.display = 'none';

var TOne = document.getElementById('TOne');
TOne.style.display = 'none';
var TTwo = document.getElementById('TTwo');
TTwo.style.display = 'none';
var TThree = document.getElementById('TThree');
TThree.style.display = 'none';
var TFour = document.getElementById('TFour');
TFour.style.display = 'none';
var TFive = document.getElementById('TFive');
TFive.style.display = 'none';

var pictures = [CROne, CRTwo, CRThree, CRFour, CRFive, GWOne, GWTwo, GWThree, GWFour, GWFive, POne, PTwo, PThree, PFour, PFive, COne, CTwo, CThree, CFour, CFive, CIOne, CITwo, CIThree, CIFour, CIFive, MPOne, MPTwo, MPThree, MPFour, MPFive, TOne, TTwo, TThree, TFour, TFive]; 

var pictureLink = document.getElementById('pictureLink');
pictureLink.addEventListener('click', picture_archive);

var next = document.getElementById('next');
next.addEventListener('click', picture_archive);

function picture_archive() {
	for (var currentPicture = 0; currentPicture < pictures.length; currentPicture = currentPicture + 1)
	pictures[currentPicture].display = 'block';
}