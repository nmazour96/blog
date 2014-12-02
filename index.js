"use strict"; // This line chooses a JavaScript dialect, one that helps both jsLint (used in OrionHub) and browsers catch errors.
/*jslint browser: true*/ // This line tells jsLint that the code will run in a browser.

var current = 0;

var choices = [document.getElementById('one'), document.getElementById('two'), document.getElementById('three'), document.getElementById('four'), document.getElementById('five'), document.getElementById('six'), document.getElementById('seven')];

var option = 0;

var question = document.getElementById('question');

var quizLink = document.getElementById('quizLink');
quizLink.addEvenListener('click', quiz_questions);

var answer = document.getElementById('answer');

function quiz_questions() {
	answer.innerHTML = '';
  	question.innerHTML = questions[current].question;
  	choices[0].innerHTML = questions[current].options[0];
  	choices[1].innerHTML = questions[current].options[1];
  	choices[2].innerHTML = questions[current].options[2];
  	choices[3].innerHTML = questions[current].options[3];
  	choices[4].innerHTML = questions[current].options[4];
  	choices[5].innerHTML = questions[current].options[5];
  	choices[6].innerHTML = questions[current].options[6];
	while (option < 7) {
		choices[option].removeEventListener('click', quiz_questions);
		choices[option].addEventListener('click',incorrect);
		option = option + 1;
	}
	if (current === 0) {
		choices[1].removeEventListener('click', incorrect);
		choices[1].addEventListener('click', quiz_questions);
	} else if (current === 1) {
		choices[6].removeEventListener('click', incorrect);
		choices[6].addEventListener('click', quiz_questions);
	} else if (current === 2) {
		choices[5].removeEventListener('click', incorrect);
		choices[5].addEventListener('click', quiz_questions);
	} else if (current === 3) {
		choices[5].removeEventListener('click', incorrect);
		choices[5].addEventListener('click', quiz_questions);
	} else if (current === 4) {
		choices[7].removeEventListener('click', incorrect);
		choices[7].addEventListener('click', quiz_questions);
	} else if (current === 5) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', quiz_questions);
	} else if (current === 6) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', quiz_questions);
	} else if (current === 7) {
		choices[4].removeEventListener('click', incorrect);
		choices[4].addEventListener('click', quiz_questions);
	} else if (current === 8) {
		choices[2].removeEventListener('click', incorrect);
		choices[2].addEventListener('click', quiz_questions);
	} else if (current === 9) {
		choices[3].removeEventListener('click', incorrect);
		choices[3].addEventListener('click', end);
	}
    current = current + 1;
    option = 0;
}

function incorrect() {
	answer.innerHTML = 'INCORRECT';
}
