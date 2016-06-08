var bgColor = ['#ce3c3c', '#ce3c3c', '#53BBF4', '#53BBF4',
               '#e793f9', '#e793f9', '#77242c', '#77242c',
               '#223a93', '#223a93', '#5d51fc', '#5d51fc',
               '#0aef0a', '#0aef0a', '#1CDDBA', '#1CDDBA',
               '#a3049b', '#a3049b', '#eaea28', '#eaea28',
               '#eaaa28', '#eaaa28', '#0a7a0a', '#0a7a0a'];

var clicks = 0;
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
for(var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flipCard);
}


// Flips the card over to reveal it's color, increases the click
// count, and evaluates matches
// ****************************************************************
function flipCard() {
  var currentCard = this;
  var background = this.getAttribute("data-content");
  currentCard.style.background = background;
  clicks += 1;

  if(clicks % 2 === 0) {
    colorEven = background;
  } else {
    colorOdd = background;
    firstCardOfPair = currentCard;
  }

  if(clicks % 2 === 0 && colorEven !== colorOdd) {
    var delay = 700; // mis-matched cards flip back over after delay
    setTimeout(function() {
      firstCardOfPair.style.background = 'white';
      currentCard.style.background = 'white';
    }, delay);
  }
}

function easyBoard() {
  var div = document.createElement("div");
    div.setAttribute("data-content", bgColor[i]);
    div.classList.add("square");


    document.body.appendChild(div);
}


// Reset the colors on the board to white, reset the click
// count to zero, and shuffle the cards
// *******************************************************
function resetBoard() {
  for(var i = 0; i < cards.length; i++) {
    cards[i].style.background = 'white';
  }
  clicks = 0;
  shuffle(bgColor);
  setColors();
}

resetButton[0].addEventListener("click", resetBoard);
