WDI9 PROJECT 1 :: JORDAN'S MEMORY GAME
**************************************

To build this game, I used HTML, CSS and Javascript...and the essence of
the tears I shed on day 1 of this project.  

I wanted the game to have a very simple and clean interface...nothing busy.
I liked the idea of using a variety of colors on a white background, so the
design is intentionally simple...not because I couldn't make it busier.  I also
knew I would need to save my energy for going to war with JavaScript, and I'm
glad I did...it was an epic battle.

****** HTML ******
******************
I have 2 rows, one for the header and one for the board.  I have 6 columns in
my second row, with 4 divs in each, making up my board.  I nested my divs inside
the columns to ensure structure, even spacing, and responsiveness(using width
percentage values instead of pixels).


****** CSS ******
*****************
Pretty straight forward.  Clean lines, grayscale, easy to use, responsive(ish)...
no fuss no muss.


****** JAVASCRIPT ******
************************
The idea sounds simple, click a square to show it's color, click another square  
to show it's color.  If they match, keep the colors visible.  If they don't match,
set the color back to it's default color, white. I was naive.  After getting
almost nowhere day 1, I went home and refreshed the major concepts of what I've
learned.  I re-approached the code on day 2 with a fresh perspective.  The code
kind of wrote itself until it came to comparing the squares.  I went to the
Wizard and asked for help, and he was able to fearlessly lead me out of
my mess...all the way from Hot-Lanta.

I have an array of colors that get shuffled on page load or when the "RESET"
button is pushed.  The colors are set to each <div> into a custom "data-content"
attribute.  When a square is clicked, the background color of the <div> is changed
to the value attached to the "data-content" attribute.  There is a click counter
that counts the number of clicks.  If the click number is odd, that card color is
stored in a variable.  If the click is even, it will compare the two color values.

The "RESET" button sets all the colors back to white and shuffles the board.


****** PROBLEMS ******
**********************
1.  Because of how I'm comparing the two colors based on click count, and because
I don't have a way of setting matched cards aside, if you click on a matched
card, it will increase the click count and throw the whole sequence of the game
off.  RESET!!
2.  I would've liked to have my <div>s created through JavaScript but didn't
have enough time to experiment.
