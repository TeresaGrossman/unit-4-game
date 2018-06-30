$(document).ready(function(){ 

//Global variables
var randomNumber = 0; 
var wins = 0;
var losses = 0;
var newScore = 0;

// Returns a random number between min and max
function getRandomArbitrary(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

//function to start the game
function initializeGame(){

//assign a random number between 19-120 as a target number and print it to the screen
    // randomNumber = Math.floor(Math.random() * 101 + 19);

	randomNumber = getRandomArbitrary(19, 120);
    $('#randomNumber').html(randomNumber);

    //create 4 random numbers between 1-12
    //assign them to each crystal
    //console log to check them
    var sapphire = getRandomArbitrary(1, 12);
	console.log(sapphire);


    var ruby = getRandomArbitrary(1, 12);
    var emerald = getRandomArbitrary(1, 12);
    var amethyst = getRandomArbitrary(1, 12);

	$("#sapphire").attr("data-value", sapphire);
	
    // $('#sapphire').data('crystalValue', sapphire);

	// Multiple ways of using the attr method in jquery/javascript
	// this would be helpful for passing in multiple attributes: class, image src
    $('#ruby').attr({
		"data-value": ruby,
		"src": "./assets/images/crystal2.jpg",
		"class": "crystal-button"
		
	})
    
    $('#emerald').attr('data-value', emerald);
    $('#amethyst').attr('data-value', amethyst);

     newScore = 0;
    $('#randomNumber').html("Random Number to Match: " +randomNumber);
	$('#wins').html("Wins: " +wins);
	$('#lose').html("Losses: " +losses);
	$('#guess').html(0);
   
}
    //set wins and losses to zero and print to the screen
  





// when a gem is clicked, add it's value to the score
    
$(document).on('click', '.crystal-button', function() {
		console.log('button clicked!!');

		console.log($(this));

		console.log($(this)[0].dataset.value);

		var clickValue = ($(this).data('value'));
		console.log(clickValue);
		
		newScore += clickValue;		
		console.log(newScore);
		$('#guess').text(newScore);
	
		// check to see if the guess has added up to the random number yet
		if (newScore > randomNumber) {
			losses++;
			$('#losses').text("Losses: " +losses);
			
			
			alert("Sorry your score is over the Random Number.  You lose!  Your final score is: "+newScore+".");
			initializeGame();
		}

		else if (newScore === randomNumber) {
			wins++;
			$('#wins').text("Wins: " +wins);
			
			
			alert("Congratulations!!! Your final score matches the Random Number!  Your final score is: "+newScore+".");
			initializeGame();
		};
	





// end of the document.ready
});

// initialize the game
initializeGame();



});



