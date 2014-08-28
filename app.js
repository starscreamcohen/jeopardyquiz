$(document).ready(function(){
	$("a.question-cell").on("click", function(){
		$(this.hash).show();
	});
	$(".submit").on("click", function(){
		$(".question").hide();
	});
});

function Category(category_title) {
	this.category_title = category_title; 
}
var categoryArr = new Array();
categoryArr[0] = new Category("Movie Duos");
categoryArr[1] = new Category("State Capitals");
categoryArr[2] = new Category("What's In A Group");
categoryArr[3] = new Category("SNL Quotes");
categoryArr[4] = new Category("TV Potpourri");
categoryArr[5] = new Category("Presidential Moments")



function Question(clue, category_id, choices, correct_answer, addPoints) {
	this.clue = clue;
	this.category_id = category_id;
	this.choices = choices;
	this.correct_answer = correct_answer;
	this.addPoints = addPoints;
}
 
 var points = null;
 function addPoints(obj, points) {
		points = $(obj).attr("data-points");
		parseInt(points);
		return points;
	}

	


var questionArr = new Array();
questionArr[0] = new Question("Who starred as the dynamic duo in Batman Forever", categoryArr[0]); 
questionArr[0].choices = {option1: "Val Kilmer & Chris O'Donnell", option2: "George Clooney & Chris O'Donnell", option3: "Michael Keaton & Jim Carrey", option4: "Bruce Wayne & Dick"};
questionArr[0].correct_answer = questionArr[0].choices["option1"];
questionArr[1] = new Question("What two funnymen tapped danced to 'Putting on the Ritz' in Mel Brooks' Young Frankenstein", categoryArr[0]);
questionArr[1].choices = {option1: "Gene Wilder & Peter Boyle", option2: "Gene Kelly & Danny Kaye", option3: "Abbot & Costello", option4: "Nathan Lane & Matthew Broderick"};
questionArr[1].correct_answer = questionArr[0].choices["option1"];
questionArr[2] = new Question("Who played best friends Thelma & Louise in this titular film", categoryArr[0]);
questionArr[2].choices = {option1: "Susan Sarandon & Geena Davis", option2: "Susan Sarandon & Julia Roberts", option3: "Meryl Streep & Goldie Hawn", option4: "Daryl Hannah & Cher"};
questionArr[2].correct_answer = questionArr[0].choices["option1"];
questionArr[3] = new Question("This couple fell in love in Sleepless in Seattle and You've Got Mail", categoryArr[0]);
questionArr[3].choices = {option1: "Tom Hanks & Meg Ryan", option2: "Julia Roberts & Richard Gere", option3: "Hugh Grant & Nicole Kidman", option4: "Patrick Swayze & Demi Moore"};
questionArr[3].correct_answer = questionArr[0].choices["option1"];
questionArr[4] = new Question("Who played Riggs and Murdoch", categoryArr[0]);
questionArr[4].choices = {option1: "Mel Gibson & Danny Glover", option2: "John Travolta & Samuel L. Jackson", option3: "Eddie Murphy & Judge Reinhold", option4: "Denzel Washington & Ethan Hawke"};
questionArr[4].correct_answer = questionArr[0].choices["option1"];
questionArr[5] = new Question("New York", categoryArr[1]);
questionArr[5].choices = {option1: "Albany", option2: "New York City", option3: "Buffalo", option4: "Syracuse"};
questionArr[5].correct_answer = questionArr[0].choices["option1"];
questionArr[6] = new Question("California", categoryArr[1]);
questionArr[6].choices = {option1: "Sacramento", option2: "Los Angeles", option3: "San Diego", option4: "San Francisco"};
questionArr[6].correct_answer = questionArr[0].choices["option1"];
questionArr[7] = new Question("Texas", categoryArr[1]);
questionArr[7].choices = {option1: "Austin", option2: "Houston", option3: "Dallas", option4: "San Antonio"};
questionArr[7].correct_answer = questionArr[0].choices["option1"];
questionArr[8] = new Question("Florida", categoryArr[1]);
questionArr[8].choices = {option1: "Tallahassee", option2: "Miami", option3: "Fort Lauderdale", option4: "Tampa Bay"};
questionArr[8].correct_answer = questionArr[0].choices["option1"];
questionArr[9] = new Question("Wyoming", categoryArr[1]);
questionArr[9].choices = {option1: "Cheyenne", option2: "Jackson Hole", option3: "Casper", option4: "Laramie"};
questionArr[9].correct_answer = questionArr[0].choices["option1"];
questionArr[10] = new Question("Pod", categoryArr[2]);
questionArr[10].choices = {option1: "Dolphins", option2: "Sunfish", option3: "Cats", option4: "Sealions"};
questionArr[10].correct_answer = questionArr[0].choices["option1"];
questionArr[11] = new Question("Murder", categoryArr[2]);
questionArr[11].choices = {option1option1: "Crows", option2: "Ravens", option3: "Jackals", option4: "Bats"};
questionArr[11].correct_answer = questionArr[0].choices["option1"];
questionArr[12] = new Question("Pride", categoryArr[2]);
questionArr[12].choices = {option1: "Lions", option2: "Peacocks", option3: "Elephants", option4: "Flamingos"};
questionArr[12].correct_answer = questionArr[0].choices["option1"];
questionArr[13] = new Question("Colony", categoryArr[2]);
questionArr[13].choices = {option1: "Penguins", option2: "Pheasants", option3: "Pelicans", option4: "Pigeons"};
questionArr[13].correct_answer = questionArr[0].choices["option1"];
questionArr[14] = new Question("Team", categoryArr[2]);
questionArr[14].choices = {option1: "Oxen", option2: "Mules", option3: "Mices", option4: "Ants"};
questionArr[14].correct_answer = questionArr[0].choices["option1"];
questionArr[15] = new Question("Isn't that Special?", categoryArr[3]);
questionArr[15].choices = {option1: "Dana Carvey", option2: "Tim Meadows", option3: "Amy Poehler", option4: "Molly Shannon"};
questionArr[15].correct_answer = questionArr[0].choices["option1"];
questionArr[16] = new Question("We are two wild and crazy guys.", categoryArr[3]);
questionArr[16].choices = {option1: "Dan Akroyd & Steve Martin", option2: "Dana Carvey & Kevin Nealon", option3: "Chris Farley & David Spade", option4: "Will Ferrell & Chris Kattan"};
questionArr[16].correct_answer = questionArr[0].choices["option1"];
questionArr[17] = new Question("I need more cowbell", categoryArr[3]);
questionArr[17].choices = {option1: "Christopher Walken", option2: "Will Ferrell", option3: "Jimmy Fallon", option4: "Chris Parnell"};
questionArr[17].correct_answer = questionArr[0].choices["option1"];
questionArr[18] = new Question("You are going to be living in a van down by the river.", categoryArr[3]);
questionArr[18].choices = {option1: "Chris Farley", option2: "Adam Sandler", option3: "David Spade", option4: "Phil Hartman"};
questionArr[18].correct_answer = questionArr[0].choices["option1"];
questionArr[19] = new Question("I can see Russia from my house", categoryArr[3]);
questionArr[19].choices = {option1: "Tina Fey", option2: "Ana Gasteyer", option3: "Amy Poehler", option4: "Kristen Wiig"};
questionArr[19].correct_answer = questionArr[0].choices["option1"];
questionArr[20] = new Question("What city does Full House take place in", categoryArr[4]);
questionArr[20].choices = {option1: "San Francisco", option2: "Seattle", option3: "Boston", option4: "Chicago"};
questionArr[20].correct_answer = questionArr[0].choices["option1"];
questionArr[21] = new Question("Which Friend is Monica's sibling?", categoryArr[4]);
questionArr[21].choices = {option1: "Ross", option2: "Joey", option3: "Chandler", option4: "Rachel"};
questionArr[21].correct_answer = questionArr[0].choices["option1"];
questionArr[22] = new Question("Who shot Mr. Burns?", categoryArr[4]);
questionArr[22].choices = {option1: "Maggie Simpson", option2: "Waylon Smithers", option3: "Bart Simpson", option4: "Chief Wiggum"};
questionArr[22].correct_answer = questionArr[0].choices["option1"];

questionArr[23] = new Question("What year did Seasame Street premiere?", categoryArr[4]);
questionArr[23].choices = {option1: "1969", option2: "1971", option3: "1983", option4: "1975"};
questionArr[23].correct_answer = questionArr[0].choices["option1"];

questionArr[24] = new Question("What did Fonzi famously jump", categoryArr[4]);
questionArr[24].choices = {option1: "Sharks", option2: "Cars", option3: "A Gorge", 3: "Arnold's Restaurant"};
questionArr[24].correct_answer = questionArr[0].choices["option1"];

questionArr[25] = new Question("He was in office during the sinking of the Titantic", categoryArr[5]);
questionArr[25].choices = {option1: "Warren G. Harding", option2: "Herbert Hoover", option3: "Calvin Coolidge", option4: "Teddy Roosevelt"};
questionArr[25].correct_answer = questionArr[0].choices["option1"];

questionArr[26] = new Question("He purchased the Louisana territory", categoryArr[5]);
questionArr[26].choices = {option1: "Thomas Jefferson", option2: "John Adams", option3: "John Quincy Adams", option4: "James Madison"};
questionArr[26].correct_answer = questionArr[0].choices["option1"];

;
questionArr[27] = new Question("He was in the oval office during the landing on the moon", categoryArr[5]);
questionArr[27].choices = {option1: "Richard Nixon", option2: "John F. Kennedy", option3: "Lyndon Johnson", option4: "Gerald Ford"};
questionArr[27].correct_answer = questionArr[0].choices["option1"];

questionArr[28] = new Question("He was serving in the White House when Disneyland opened", categoryArr[5]);
questionArr[28].choices = {option1: "Dwight Eisenhower", option2: "John F. Kennedy", option3: "Harry Truman", option4: "Richard Nixon"};
questionArr[28].correct_answer = questionArr[0].choices["option1"];

questionArr[29] = new Question("He was in office during Custer's Last Stand", categoryArr[5]);
questionArr[29].choices = {option1: "Ulysses S. Grant", option2: "Andrew Johnson", option3: "Rutherford B. Hayes", option4: "James Garfield"};
questionArr[29].correct_answer = questionArr[0].choices["option1"];



function init() {

	var cells = $("#category-row th");
	// loops through table headings
	// 
	for (var i = 0; i < cells.length; i++) {
		cell = cells[i];
		$(cell).append(categoryArr[i].category_title);
	}


var questionLists = $("#question-wrapper .question");
	for (var c = 0; c < questionLists.length; c++) {
		questionList = $(questionLists[c]);
		$(questionList).children("p").append(questionArr[c].clue);
			var clueIterator = $(questionList).children(".clue");
			for (var x = 0; x < clueIterator.length; x++) {
 				$(clueIterator[x]).append(questionArr[c].choices[x]);
			}
	}
}init();
 
//model name, picture and update score










function Player(score) {
	this.score = score;
}


function getInitials() {
 player1.initials = document.getElementById('initials').value; 
 document.getElementById('initials').value = "";
}


