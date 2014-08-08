$(document).ready(function(){
});

function categoryObj(category_title) {
	this.category_title = category_title; 
}
var category = new Array();
category[0] = new categoryObj("Movie Duos");
category[1] = new categoryObj("State Capitals");
category[2] = new categoryObj("Name the Video Game");
category[3] = new categoryObj("SNL Jeopardy Quotes");
category[4] = new categoryObj("Civil War Battles");
category[5] = new categoryObj("Name the TV Show")

function init(){ 
	for (i = 0; i < category.length; i++) {
	  for (category_title in category[i]) {
	    $('th').append(category[i].category_title);
	  }
	}
}

 function Question(clue, category_id, choices) {
	this.clue = clue;
	this.category_id = category_id;
}

var question = new Array();
question[0] = new Question("What comedy team starred in 1996 buddy flick 'Swingers'?", category[0]);
question[0].choices = {0: "Adam Sandler & Rob Schneider", 1: "Jon Favreau & Vince Vaughan", 2: "John Goodman & Tim Blake Nelson", 3: "Dave Chappelle & Kevin Harland"}
question[0].correctAnswer = question[0].choices[0];
question[1] = new Question("Who starred as the dynamic duo in Batman Forever", category[0]); 
question[1].choices = {0: "Val Kilmer & Chris O'Donnell", 1: "George Clooney & Chris O'Donnell", 2: "Michael Keaton & Jim Carrey", 3: "Bruce Wayne & Dick"}
question[1].correctAnswer = question[1].choices[0];
question[2] = new Question("What two funnymen tapped danced to 'Putting on the Ritz in Mel Blank's Young Frankenstein", category[0]);
question[2].choices = {0: "Gene Wilder & Peter Boyle", 1: "	"}
//model name, picture and update score





function Player(score) {
	this.score = score;
}


function getInitials() {
 player1.initials = document.getElementById('initials').value; 
 document.getElementById('initials').value = "";
}


