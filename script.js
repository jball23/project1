var bgColor = ['#ce3c3c', '#ce3c3c', '#53BBF4', '#53BBF4',
               '#e793f9', '#e793f9', '#77242c', '#77242c',
               '#223a93', '#223a93', '#5d51fc', '#5d51fc',
               '#0aef0a', '#0aef0a', '#1CDDBA', '#1CDDBA',
               '#a3049b', '#a3049b', '#eaea28', '#eaea28',
               '#eaaa28', '#eaaa28', '#0a7a0a', '#0a7a0a'];

var clicks = 0;
var matched = 0;
var attempts = 0;
var cards = document.querySelectorAll(".square");
var resetButton = document.getElementsByTagName("button");



// Shuffles the colors in my bgColor array
// ***************************************
function shuffle(array) {
  var i;
  var j;
  var temp;
  for(i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffle(bgColor);


// Adds a data-content attribute to index.html and gives each attribute
// a random color from the bgColor array
// ********************************************************************
function setColors() {
  for(var i = 0; i < cards.length; i++) {
    cards[i].setAttribute("data-content", bgColor[i]);
  }
}
setColors();


// Adds a click event listener to each card and references the flipCard
// function in order to show the bgColor assigned to it
// ********************************************************************
function divEvents() {
  for(var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", flipCard);
  }
}
divEvents();

// Flips the card over to reveal it's color, increases the click
// count, and evaluates matches
// ****************************************************************
function flipCard() {
  var currentCard = this;
  var background = this.getAttribute("data-content");
  currentCard.style.background = background;
  clicks++;

  if(clicks % 2 === 0) {
    colorEven = background;
  } else {
    colorOdd = background;
    firstCardOfPair = currentCard;
  }

  if(clicks % 2 === 0 && colorEven !== colorOdd) {
    var delay = 500; // mis-matched cards flip back over after delay
    setTimeout(function() {
      firstCardOfPair.style.background = 'white';
      currentCard.style.background = 'white';
    }, delay);
      attempts++;
  } else if(clicks % 2 === 0 && colorEven === colorOdd) {
      matched++;
      firstCardOfPair.removeEventListener("click", flipCard);
      currentCard.removeEventListener("click", flipCard);
      attempts++;
  }
  

  if(matched === 12) {
    alert("YOU'RE A WINNER, JUST LIKE YOUR MOM SAID!! \n...and it only took you  "+ attempts +"  attempts!");
      }
}


// Reset the colors on the board to white, reset the click
// count to zero, and shuffle the cards
// *******************************************************
function resetBoard() {
  for(var i = 0; i < cards.length; i++) {
    cards[i].style.background = 'white';
  }
  clicks = 0;
  matched = 0;
  shuffle(bgColor);
  setColors();
  divEvents();
}

resetButton[0].addEventListener("click", resetBoard);


//**************  OLD CODE!  ****************
//**************  OLD CODE!  ****************

// var deck = document.querySelectorAll(".square");
// var color = '';
// var colorEven;
// var colorOdd;
// var defaultColor = 'white';
// var card;
// var clicks = 0;
// var firstCardOfPair;
//
// for(var i = 0; i < deck.length; i++) {
//   card = document.querySelectorAll(".square");
//   card[i].addEventListener("click", showColor);
// }
//
//
// function showColor() {
//   var currentCard = this;
//
//   color = currentCard.getAttribute("data-content");
//   currentCard.style.background = color;
//   clicks += 1;
//
//   if(clicks % 2 === 0) {
//     colorEven = color;
//   } else {
//     colorOdd = color;
//     firstCardOfPair = currentCard;
//   }
//
//   if(clicks % 2 === 0 && colorEven !== colorOdd) {
//     alert("no match");
//     firstCardOfPair.style.background = defaultColor;
//     currentCard.style.background = defaultColor;
//   }
// }
