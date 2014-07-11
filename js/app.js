
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

//----------------------------------------------
//------------Hot-Cold Game Functions--------------
//-----------------------------------------------


// generate a random number btw 1 - 100
  	var generateNumber = function(){
  		return Math.floor((Math.random() * 100)+1)
  	}

//evaluates the guess
var evaluateGuess = function(userGuess, winNum){
  		if(userGuess > winNum){
  			alert('too high!');
  			} else {
  			alert('too low!');
  			}
    	};

//counts the guess
var guessCounter = function() {
	counter = (parseInt($('#count').text()));
  	counter++;
  	$('#count').text(counter);
};

//adds the number to the list
var addNumToList = function(userGuess){
	$('#guessList')
		.prepend('<li>'+userGuess+'</li>');

};

//resets the game when a user guesses the right number
var winReset = function() {
	alert('hey you won!');
	$('#guessList li').remove();
	$('#count').text('0');
	};
  	
//--------------------------------------------------
 //-----------Hot-Cold Game Programming-------------
//--------------------------------------------------

//start program by generating a random number
  	var winNum = generateNumber();
  	alert(winNum);

// click event on button- captures value from #userGuess input 
// and determines if hot/cold
  	$('#guessButton').on('click', function(evt){
  			evt.preventDefault();
  			
  			var userGuess = parseInt($('#userGuess').val());
  			
  			$('#userGuess').val('')
  			
  			//if user guesses right: tell her she won and reset the game
  			if(userGuess == winNum){
				winReset()
				winNum = generateNumber()
				alert(winNum)
			//if user guesses wrong: evaluate guess(high/low), add to guessCounter
			//and record the number to the list
  			} else {
  				evaluateGuess(userGuess, winNum);
  				guessCounter()
  				addNumToList(userGuess)};
  		  	});





});


//DEV Notes 

//To-do
//1- Add Hot,hotter, super hot & cold feature ranges (>5, >10, >20) to evaluateGuess() function
//2- create on.click handler for 'new game'
//3- show & hide a pop-up div to display feedback rather than using alert()

		
	
