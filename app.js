$(document).ready(function(){
	$("td").click(function(){
		$(".clue").show();
	});
	$(".submit").click(function(){
		$(".clue").remove();
	});
});

function Category(category_title) {
	this.category_title = category_title; 
}
var category = new Array();
category[0] = new Category("Movie Duos");
category[1] = new Category("State Capitals");
category[2] = new Category("What's In A Group");
category[3] = new Category("SNL Quotes");
category[4] = new Category("TV Potpourri");
category[5] = new Category("Presidential Moments")








 function Question(clue, category_id, choices) {
	this.clue = clue;
	this.category_id = category_id;
}

var question = new Array();
question[0] = new Question("Who starred as the dynamic duo in Batman Forever", category[0]); 
question[0].choices = {0: "Val Kilmer & Chris O'Donnell", 1: "George Clooney & Chris O'Donnell", 2: "Michael Keaton & Jim Carrey", 3: "Bruce Wayne & Dick"}
question[1] = new Question("What two funnymen tapped danced to 'Putting on the Ritz' in Mel Brooks' Young Frankenstein", category[0]);
question[1].choices = {0: "Gene Wilder & Peter Boyle", 1: "Gene Kelly & Danny Kaye", 2: "Abbot & Costello", 3: "Nathan Lane & Matthew Broderick"};
question[2] = new Question("Who played best friends Thelma & Louise in this titular film", category[0]);
question[2].choices = {0: "Susan Sarandon & Geena Davis", 1: "Susan Sarandon & Julia Roberts", 2: "Meryl Streep & Goldie Hawn", 3: "Daryl Hannah & Cher"};
question[3] = new Question("This couple fell in love in Sleepless in Seattle and You've Got Mail", category[0]);
question[3].choices = {0: "Tom Hanks & Meg Ryan", 1: "Julia Roberts & Richard Gere", 2: "Hugh Grant & Nicole Kidman", 3: "Patrick Swayze & Demi Moore"};
question[4] = new Question("Who played Riggs and Murdoch", category[0]);
question[4].choices = {0: "Mel Gibson & Danny Glover", 1: "John Travolta & Samuel L. Jackson", 2: "Eddie Murphy & Judge Reinhold", 3: "Denzel Washington & Ethan Hawke"};
question[5] = new Question("New York", category[1]);
question[5].choices = {0: "Albany", 1: "New York City", 2: "Buffalo", 3: "Syracuse"};
question[6] = new Question("California", category[1]);
question[6].choices = {0: "Sacramento", 1: "Los Angeles", 2: "San Diego", 3: "San Francisco"};
question[7] = new Question("Texas", category[1]);
question[7].choices = {0: "Austin", 1: "Houston", 2: "Dallas", 3: "San Antonio"};
question[8] = new Question("Florida", category[1]);
question[8].choices = {0: "Tallahassee", 1: "Miami", 2: "Fort Lauderdale", 3: "Tampa Bay"};
question[9] = new Question("Wyoming", category[1]);
question[9].choices = {0: "Cheyenne", 1: "Jackson Hole", 2: "Casper", 3: "Laramie"};
question[10] = new Question("Pod", category[2]);
question[10].choices = {0: "Dolphins", 1: "Sunfish", 2: "Cats", 3: "Sealions"};
question[11] = new Question("Murder", category[2]);
question[11].choices = {0: "Crows", 1: "Ravens", 2: "Jackals", 3: "Bats"};
question[12] = new Question("Pride", category[2]);
question[12].choices = {0: "Lions", 1: "Peacocks", 2: "Elephants", 3: "Flamingos"};
question[13] = new Question("Colony", category[2]);
question[13].choices = {0: "Penguins", 1: "Pheasants", 2: "Pelicans", 3: "Pigeons"};
question[14] = new Question("Team", category[2]);
question[14].choices = {0: "Oxen", 1: "Mules", 2: "Mices", 3: "Ants"};
question[15] = new Question("Isn't that Special?", category[3]);
question[15].choices = {0: "Dana Carvey", 1: "Tim Meadows", 2: "Amy Poehler", 3: "Molly Shannon"};
question[16] = new Question("We are two wild and crazy guys.", category[3]);
question[16].choices = {0: "Dan Akroyd & Steve Martin", 1: "Dana Carvey & Kevin Nealon", 2: "Chris Farley & David Spade", 3: "Will Ferrell & Chris Kattan"};
question[17] = new Question("I need more cowbell", category[3]);
question[17].choices = {0: "Christopher Walken", 1: "Will Ferrell", 2: "Jimmy Fallon", 3: "Chris Parnell"};
question[18] = new Question("You are going to be living in a van down by the river.", category[3]);
question[18].choices = {0: "Chris Farley", 1: "Adam Sandler", 2: "David Spade", 3: "Phil Hartman"};
question[19] = new Question("I can see Russia from my house", category[3]);
question[19].choices = {0: "Tina Fey", 1: "Ana Gasteyer", 2: "Amy Poehler", 3: "Kristen Wiig"};
question[20] = new Question("What city does Full House take place in", category[4]);
question[20].choices = {0: "San Francisco", 1: "Seattle", 2: "Boston", 3: "Chicago"};
question[21] = new Question("Which Friend is Monica's sibling?", category[4]);
question[21].choices = {0: "Ross", 1: "Joey", 2: "Chandler", 3: "Rachel"};
question[22] = new Question("Who shot Mr. Burns?", category[4]);
question[22].choices = {0: "Maggie Simpson", 1: "Waylon Smithers", 2: "Bart Simpson", 3: "Chief Wiggum"};
question[23] = new Question("What year did Seasame Street premiere?", category[4]);
question[23].choices = {0: "1969", 1: "1971", 2: "1983", 3: "1975"};
question[24] = new Question("What did Fonzi famously jump", category[4]);
question[24].choices = {0: "Sharks", 1: "Cars", 2: "A Gorge", 3: "Arnold's Restaurant"};
question[25] = new Question("He was in office during the sinking of the Titantic", category[5]);
question[25].choices = {0: "Warren G. Harding", 1: "Herbert Hoover", 2: "Calvin Coolidge", 3: "Teddy Roosevelt"};
question[26] = new Question("He purchased the Louisana territory", category[5]);
question[26].choices = {0: "Thomas Jefferson", 1: "John Adams", 2: "John Quincy Adams", 3: "James Madison"};
;
question[27] = new Question("He was in the oval office during the landing on the moon", category[5]);
question[27].choices = {0: "Richard Nixon", 1: "John F. Kennedy", 2: "Lyndon Johnson", 3: "Gerald Ford"};
question[28] = new Question("He was serving in the White House when Disneyland opened", category[5]);
question[28].choices = {0: "Dwight Eisenhower", 1: "John F. Kennedy", 2: "Harry Truman", 3: "Richard Nixon"};
question[29] = new Question("He was in office during Custer's Last Stand", category[5]);
question[29].choices = {0: "Ulysses S. Grant", 1: "Andrew Johnson", 2: "Rutherford B. Hayes", 3: "James Garfield"};

for (var i = 0; i < question.length; i++) {
	question[i].correctAnswer = question[i].choices[0];
}

function init() {
//Randomize the category display
	var cells = $("#category-row th");
	for (var i = 0; i < cells.length; i++) {
		cell = cells[i];
		$(cell).append(category[i].category_title);
	}

//Randomize the questions
//Must match their specific category
var questionListItems = $("#questions .clue li");
	for (var c = 0; c < questionListItems.length; c++) {
		questionList = questionListItems[c];
		$(questionList).append(question[c].clue);
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


