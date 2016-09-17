'use strict'
$(document).ready(function(){

	var startNewGame = $(".new")
	var submitGuessNumber = $("#guessButton")
	var count = $("#count")
 	var playerInput = $("#userGuess")
	var guessCount = 0
	var specialNumber = 0
	var guessList = $("#guessList")
	var feedbackHeader = $("#feedback")


	//A function to start a new game
	function newGame() {
		console.log("THIS IS A NEW GAME");
		//generateRandomNumber will be called and put into a specialNumber
		specialNumber = generateRandomNumber(1, 100)
		console.log("The special number " + specialNumber)
		guessCount = 0
		count.text(guessCount)
		playerInput.val('')
		feedbackHeader.text("Take a Guess!")
		feedbackHeader.removeClass()
		$('.newGuess').remove()
		specialNumber = generateRandomNumber(1, 100)
		console.log("If it's working... " + specialNumber)
	}

//Starts new game
		startNewGame.click(newGame)

		submitGuessNumber.click(isNumber)

//Submit entry with Enter key to validate number
$(document).keypress(function (event) {
		var keyPressed = event.keyCode || event.which;
		if (keyPressed == '13') {
			// console.log("Enter was pressed");
				event.preventDefault();
        $("#guessButton").submit();
				// console.log("am I working");
				isNumber()
    }
})

function isNumber() {
	var numberSubmitted = playerInput.val()
	var userNumber = parseInt(numberSubmitted)
	// return !isNaN(parseInt(isNumber)) && isFinite(isNumber);
	console.log("You guessed " + userNumber)
	if(userNumber >= 1 && userNumber <= 100) {
		increaseCount()
		generateFeedback(specialNumber, userNumber)
		playerInput.val('')
	}else{
		alert("Please choose a number between 1-100")
	}
}

// function generateFeedback(specialNumber, userNumber) {
// 		var playerFeedback = specialNumber - userNumber
// 	}

//Generates random number between 1-100
function generateRandomNumber(minimum, maximum) {
	console.log("random number")
return Math.floor((Math.random() * maximum) + minimum)
}

function generateFeedback(specialNumber, userGuess) {
	var playerFeedback = specialNumber - userGuess
	console.log("You are " + playerFeedback + " numbers away from the correct answer")
		if (playerFeedback === 0) {
			feedbackHeader.text("The special number is" + specialNumber + " !")
			guessList.append('li class= "special newGuess">' + userGuess + '</li>')
			feedbackHeader.addClass('special')

		}else if (playerFeedback >= 9 && playerFeedback <= -9) {
			feedbackHeader.text("Veerry Hot")
			guessList.append('li class= "very-hot newGuess">' + userGuess + '</li>')
			feedbackHeader.removeClass()
			feedbackHeader.addClass('very-hot')

		}else if (playerFeedback >= 10 && playerFeedback <= 20 || playerFeedback <= -10 && playerFeedback >= -20) {
		feedbackHeader.text("Hot")
		guessList.append('li class= "hot newGuess">' + userGuess + '</li>')
		feedbackHeader.removeClass()
		feedbackHeader.addClass('hot')

	}else if (playerFeedback >= 21 && playerFeedback <= 30 || playerFeedback >= -21 && playerFeedback <= -30 ) {
		feedbackHeader.text("Warmer")
		guessList.append('li class= "warmer newGuess">' + userGuess + '</li>')
		feedbackHeader.removeClass()
		feedbackHeader.addClass('warmer')

	}else if (playerFeedback >= 31 && playerFeedback <= 49 || playerFeedback >= -31 && playerFeedback <= -49) {
		feedbackHeader.text("Cold")
		guessList.append('li class= "cold newGuess">' + userGuess + '</li>')
		feedbackHeader.removeClass()
		feedbackHeader.addClass('cold')

	}else {
		feedbackHeader.text("Ice Cold")
		guessList.append('<li class= "ice cold newGuess">' + userGuess + '</li>')
	}
}

function increaseCount() {
	// alert("I am one")
	guessCount++;
	count.text(guessCount)
}

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});
