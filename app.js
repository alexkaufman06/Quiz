function populate() {
	if(quiz.isEnded()) {
		showScores();
	} else {
		// Show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		// Show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i=0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
	var gameOverHtml = "<div id='gameOver'><h1>Results</h1>";
  gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + "/" + quiz.questions.length + "</h2>";
  gameOverHtml += "<p>Learn more <a href='https://www.musictheory.net/' target='_blank'>here</a>!</p>"
  gameOverHtml += "<p><a href='#' onclick='window.location.reload(true);'>Try Again?</p></div>"
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
};

var questions = [
	new Question("How many sharps are in the key of D major?", ["1", "2", "3", "4"], "2"),
	new Question("How many sharps are in the key of G major?", ["1", "2", "3", "4"], "1"),
	new Question("How many sharps are in the key of A major?", ["1", "2", "3", "4"], "3"),
	new Question("How many sharps are in the key of E major?", ["1", "2", "3", "4"], "4"),
	new Question("How many flats are in the key of F major?", ["1", "2", "3", "4"], "1")
];

var quiz = new Quiz(questions);

populate();