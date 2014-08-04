
//create pictures for it
function Player(score) {
	this.score = score;
}


var player1 = new Player(0);

function getInitials() {
 player1.initials = document.getElementById('initials').value; 
 document.getElementById('initials').value = "";
}

//create Category
function Question(clue, points) {
	this.clue = clue;
	this.points = points;
}

Question.prototype.answer = [];

var question1 = new Question("What Is This?", 100)
question1.answer = {0: "An Answer", 1: "Next Answer", 2: "From Where", 3: "What"}

$(document).ready(function(){
	$('.submit').on('click', function() {
		getInitials();
	});
});

