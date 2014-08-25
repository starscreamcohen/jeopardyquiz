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


function Question(clue, category_id, choices) {
	this.clue = clue;
	this.category_id = category_id;
}

var questionArr = new Array();
questionArr[0] = new Question("Who starred as the dynamic duo in Batman Forever", categoryArr[0]); 
questionArr[0].choices = {0: "Val Kilmer & Chris O'Donnell", 1: "George Clooney & Chris O'Donnell", 2: "Michael Keaton & Jim Carrey", 3: "Bruce Wayne & Dick"}
questionArr[1] = new Question("What two funnymen tapped danced to 'Putting on the Ritz' in Mel Brooks' Young Frankenstein", categoryArr[0]);
questionArr[1].choices = {0: "Gene Wilder & Peter Boyle", 1: "Gene Kelly & Danny Kaye", 2: "Abbot & Costello", 3: "Nathan Lane & Matthew Broderick"};
questionArr[2] = new Question("Who played best friends Thelma & Louise in this titular film", categoryArr[0]);
questionArr[2].choices = {0: "Susan Sarandon & Geena Davis", 1: "Susan Sarandon & Julia Roberts", 2: "Meryl Streep & Goldie Hawn", 3: "Daryl Hannah & Cher"};
questionArr[3] = new Question("This couple fell in love in Sleepless in Seattle and You've Got Mail", categoryArr[0]);
questionArr[3].choices = {0: "Tom Hanks & Meg Ryan", 1: "Julia Roberts & Richard Gere", 2: "Hugh Grant & Nicole Kidman", 3: "Patrick Swayze & Demi Moore"};
questionArr[4] = new Question("Who played Riggs and Murdoch", categoryArr[0]);
questionArr[4].choices = {0: "Mel Gibson & Danny Glover", 1: "John Travolta & Samuel L. Jackson", 2: "Eddie Murphy & Judge Reinhold", 3: "Denzel Washington & Ethan Hawke"};
questionArr[5] = new Question("New York", categoryArr[1]);
questionArr[5].choices = {0: "Albany", 1: "New York City", 2: "Buffalo", 3: "Syracuse"};
questionArr[6] = new Question("California", categoryArr[1]);
questionArr[6].choices = {0: "Sacramento", 1: "Los Angeles", 2: "San Diego", 3: "San Francisco"};
questionArr[7] = new Question("Texas", categoryArr[1]);
questionArr[7].choices = {0: "Austin", 1: "Houston", 2: "Dallas", 3: "San Antonio"};
questionArr[8] = new Question("Florida", categoryArr[1]);
questionArr[8].choices = {0: "Tallahassee", 1: "Miami", 2: "Fort Lauderdale", 3: "Tampa Bay"};
questionArr[9] = new Question("Wyoming", categoryArr[1]);
questionArr[9].choices = {0: "Cheyenne", 1: "Jackson Hole", 2: "Casper", 3: "Laramie"};
questionArr[10] = new Question("Pod", categoryArr[2]);
questionArr[10].choices = {0: "Dolphins", 1: "Sunfish", 2: "Cats", 3: "Sealions"};
questionArr[11] = new Question("Murder", categoryArr[2]);
questionArr[11].choices = {0: "Crows", 1: "Ravens", 2: "Jackals", 3: "Bats"};
questionArr[12] = new Question("Pride", categoryArr[2]);
questionArr[12].choices = {0: "Lions", 1: "Peacocks", 2: "Elephants", 3: "Flamingos"};
questionArr[13] = new Question("Colony", categoryArr[2]);
questionArr[13].choices = {0: "Penguins", 1: "Pheasants", 2: "Pelicans", 3: "Pigeons"};
questionArr[14] = new Question("Team", categoryArr[2]);
questionArr[14].choices = {0: "Oxen", 1: "Mules", 2: "Mices", 3: "Ants"};
questionArr[15] = new Question("Isn't that Special?", categoryArr[3]);
questionArr[15].choices = {0: "Dana Carvey", 1: "Tim Meadows", 2: "Amy Poehler", 3: "Molly Shannon"};
questionArr[16] = new Question("We are two wild and crazy guys.", categoryArr[3]);
questionArr[16].choices = {0: "Dan Akroyd & Steve Martin", 1: "Dana Carvey & Kevin Nealon", 2: "Chris Farley & David Spade", 3: "Will Ferrell & Chris Kattan"};
questionArr[17] = new Question("I need more cowbell", categoryArr[3]);
questionArr[17].choices = {0: "Christopher Walken", 1: "Will Ferrell", 2: "Jimmy Fallon", 3: "Chris Parnell"};
questionArr[18] = new Question("You are going to be living in a van down by the river.", categoryArr[3]);
questionArr[18].choices = {0: "Chris Farley", 1: "Adam Sandler", 2: "David Spade", 3: "Phil Hartman"};
questionArr[19] = new Question("I can see Russia from my house", categoryArr[3]);
questionArr[19].choices = {0: "Tina Fey", 1: "Ana Gasteyer", 2: "Amy Poehler", 3: "Kristen Wiig"};
questionArr[20] = new Question("What city does Full House take place in", categoryArr[4]);
questionArr[20].choices = {0: "San Francisco", 1: "Seattle", 2: "Boston", 3: "Chicago"};
questionArr[21] = new Question("Which Friend is Monica's sibling?", categoryArr[4]);
questionArr[21].choices = {0: "Ross", 1: "Joey", 2: "Chandler", 3: "Rachel"};
questionArr[22] = new Question("Who shot Mr. Burns?", categoryArr[4]);
questionArr[22].choices = {0: "Maggie Simpson", 1: "Waylon Smithers", 2: "Bart Simpson", 3: "Chief Wiggum"};
questionArr[23] = new Question("What year did Seasame Street premiere?", categoryArr[4]);
questionArr[23].choices = {0: "1969", 1: "1971", 2: "1983", 3: "1975"};
questionArr[24] = new Question("What did Fonzi famously jump", categoryArr[4]);
questionArr[24].choices = {0: "Sharks", 1: "Cars", 2: "A Gorge", 3: "Arnold's Restaurant"};
questionArr[25] = new Question("He was in office during the sinking of the Titantic", categoryArr[5]);
questionArr[25].choices = {0: "Warren G. Harding", 1: "Herbert Hoover", 2: "Calvin Coolidge", 3: "Teddy Roosevelt"};
questionArr[26] = new Question("He purchased the Louisana territory", categoryArr[5]);
questionArr[26].choices = {0: "Thomas Jefferson", 1: "John Adams", 2: "John Quincy Adams", 3: "James Madison"};
;
questionArr[27] = new Question("He was in the oval office during the landing on the moon", categoryArr[5]);
questionArr[27].choices = {0: "Richard Nixon", 1: "John F. Kennedy", 2: "Lyndon Johnson", 3: "Gerald Ford"};
questionArr[28] = new Question("He was serving in the White House when Disneyland opened", categoryArr[5]);
questionArr[28].choices = {0: "Dwight Eisenhower", 1: "John F. Kennedy", 2: "Harry Truman", 3: "Richard Nixon"};
questionArr[29] = new Question("He was in office during Custer's Last Stand", categoryArr[5]);
questionArr[29].choices = {0: "Ulysses S. Grant", 1: "Andrew Johnson", 2: "Rutherford B. Hayes", 3: "James Garfield"};

for (var i = 0; i < questionArr.length; i++) {
questionArr[i].correctAnswer = questionArr[i].choices[0];
}

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


