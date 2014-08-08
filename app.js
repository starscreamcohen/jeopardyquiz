function categoryObj(category, id) {
	this.category = category; 
	this.id = id; 
}

var movie = new categoryObj("Movie Duos", 0);
var capitals = new categoryObj("State Capitals", 1);

function Question(clue, category_id, choices) {
	this.clue = clue;
	this.category_id = category_id;
}

	

var question = new Array();
question[0] = new Question("What Comedy Duo Starred in Swingers?", movie);
question[0].choices = {0: "Adam Sandler & Rob Schneider", 1: "Jon Favreau & Vince Vaughan", 2: "John Goodman & Tim Blake Nelson", 3: "Dave Chappelle & Kevin Harland"}
question[0].correctAnswer = question[0].choices[0];
question[1] = new Question("What's the Capital of Vermont", capitals);

//model name, picture and update score
function Player(score) {
	this.score = score;
}


function getInitials() {
 player1.initials = document.getElementById('initials').value; 
 document.getElementById('initials').value = "";
}





$(document).ready(function(){
});

