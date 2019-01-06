function populate() {
	if(quiz.isEnded()) {
		//showScores();
	} else {
		// Show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;
		// Show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i=0; i < choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
		}
	}
}

var questions = [
	new Question("How many sharps are in the key of D major?", ["1", "2", "3", "4"], "2"),
	new Question("How many sharps are in the key of G major?", ["1", "2", "3", "4"], "1"),
	new Question("How many sharps are in the key of A major?", ["1", "2", "3", "4"], "3"),
	new Question("How many sharps are in the key of E major?", ["1", "2", "3", "4"], "4"),
	new Question("How many flats are in the key of F major?", ["1", "2", "3", "4"], "1")
];

var quiz = new Quiz(questions);

populate();