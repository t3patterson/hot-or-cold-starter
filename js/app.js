
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

var maxNumber= 100

var generateNumber = function(){
  		return Math.floor((Math.random() * 100)+1)
  	}

var showFeedback = function(showFeedback){
	
	$('.gameFeedback').slideDown(300).fadeOut(1400)
}


//evaluates the guess
var evaluateGuess = function(userGuess, winNum){
  		if(isNaN(userGuess) || userGuess > maxNumber){
  			return 'please enter a number between 1-100'
  		
  		} else 	if(userGuess + 3 > winNum && userGuess - 3 < winNum){
  			return 'red hot!!!';
  			} else if (userGuess + 7 > winNum && userGuess - 7 < winNum){
  				return 'getting hot!'
  			} else if (userGuess + 12 > winNum && userGuess - 12 < winNum){
  				return 'warm'
  			} else if (userGuess + 20 > winNum && userGuess - 20 < winNum){
  				return 'luke-warm'
			} else if (userGuess + 25 > winNum && userGuess - 25 < winNum){
  				return 'brrr. cold';
  			} else {
  				return 'ice cold!!'
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

var clearText = function(){
	$('#userGuess').val('')
}

//resets the game
var reset = function(){
	$('#guessList li').remove();
	$('#count').text('0');
	};

//resets the game when a user guesses the right number
  	
//--------------------------------------------------
 //-----------Hot-Cold Game Programming-------------
//--------------------------------------------------

//start program by generating a random number
  	var winNum = generateNumber();
  	

// click event on button- captures value from #userGuess input 
// and determines if hot/cold
  	$('#guessButton').on('click', function(evt){
  			evt.preventDefault();
  			
  			var userGuess = parseInt($('#userGuess').val());
  			
  			if (isNaN(userGuess) || userGuess > maxNumber){
  				$('.gameFeedback h3').text('enter a number between 1-100');
  				showFeedback();
  			}
  			//if user guesses right: tell her she won and reset the game
  			else if (userGuess !== winNum){
  				evaluateGuess(userGuess, winNum);
  				guessCounter();
  				addNumToList(userGuess);
				$('.gameFeedback h3').text(evaluateGuess(userGuess,winNum));
  				showFeedback();
  				clearText();
			//if user guesses wrong: evaluate guess(high/low), add to guessCounter
			//and record the number to the list
  			} else {

				$('.gameFeedback h3').text('Hey you won!!').addClass('win');
				showFeedback();
				winNum = generateNumber();
				reset();
				clearText();
			}	

  		  	});

  	$('.new').on('click', function(){
  		reset()
  	});



});


//DEV Notes 

//Additional Add-Ons
//1-fix winning number display and reset()

		
	
