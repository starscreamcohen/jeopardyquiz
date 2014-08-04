
//create pictures for it
function Player(score) {
	this.score = score;
}

var player1 = new Player(0);

$('#p1-score').children('span').append(player1.score);

function getInitials() {
 player1.initials = document.getElementById('initials').value; 
 document.getElementById('initials').value = "";
}


function Question(clue, points, category) {
	this.clue = clue;
	this.points = points;
	this.category = category;
}

Question.prototype.choices = [];


var question1 = new Question("What Comedy Duo Starred in Swingers?", 100, "90's Movies")
question1.choices = {0: "Adam Sandler & Rob Schneider", 1: "Jon Favreau & Vince Vaughan", 2: "John Goodman & Tim Blake Nelson", 3: "Dave Chappelle & Kevin Harland"}



$(document).ready(function(){
	$('.submit').on('click', function() {
		getInitials();
		$('#p1-initials').children('p').append(player1.initials);
		$('.overlay').hide();
	});
	$('.active').on('click', function(){
		$(".clue").show();
	});
	$('#category-one').append(question1.category);
	$('.clue').children('#question').append(question1.clue);
	$('#choice-one').append(question1.choices[0]);
	$('#choice-two').append(question1.choices[1]);
	$('#choice-three').append(question1.choices[2]);
	$('#choice-four').append(question1.choices[3]);
});

