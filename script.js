var squares = document.querySelectorAll(".square");
var clicks = 0;
var lastPicked;



for(var i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", function() {
    console.log(lastPicked);
    this.style.background = this.getAttribute("data-content");
    console.log(this.getAttribute("data-content"));
    console.log(clicks);
//compare the two cards

    lastPicked = this;
    clicks++;
  });
}




//
// var square1 = document.getElementById("square-1");
// var square2 = document.getElementById("square-2");
// var square3 = document.getElementById("square-3");
// var square4 = document.getElementById("square-4");
// var square5 = document.getElementById("square-5");
// var square6 = document.getElementById("square-6");
// var square7 = document.getElementById("square-7");
// var square8 = document.getElementById("square-8");
// var square9 = document.getElementById("square-9");
// var square10 = document.getElementById("square-10");
// var square11 = document.getElementById("square-11");
// var square12 = document.getElementById("square-12");
// var square13 = document.getElementById("square-13");
// var square14 = document.getElementById("square-14");
// var square15 = document.getElementById("square-15");
// var square16 = document.getElementById("square-16");
// var square17 = document.getElementById("square-17");
// var square18 = document.getElementById("square-18");
// var square19 = document.getElementById("square-19");
// var square20 = document.getElementById("square-20");
// var square21 = document.getElementById("square-21");
// var square22 = document.getElementById("square-22");
// var square23 = document.getElementById("square-23");
// var square24 = document.getElementById("square-24");
//
// var color1 = "blue";
// var color2 = "red";
// var color3 = "green";
// var color4 = "gold";
// var color5 = "purple";
// var color6 = "orange";
// var color7 = "magenta";
// var color8 = "cyan";
// var color9 = "lightblue";
// var color10 = "lightgreen";
// var color11 = "lightyellow";
// var color12 = "lime";
//
//
// square1.addEventListener("click", squareColor1);
// square2.addEventListener("click", squareColor2);
// square3.addEventListener("click", squareColor3);
// square4.addEventListener("click", squareColor4);
// square5.addEventListener("click", squareColor5);
// square6.addEventListener("click", squareColor6);
// square7.addEventListener("click", squareColor7);
// square8.addEventListener("click", squareColor8);
// square9.addEventListener("click", squareColor9);
// square10.addEventListener("click", squareColor10);
// square11.addEventListener("click", squareColor11);
// square12.addEventListener("click", squareColor12);
// square13.addEventListener("click", squareColor8);
// square14.addEventListener("click", squareColor3);
// square15.addEventListener("click", squareColor9);
// square16.addEventListener("click", squareColor2);
// square17.addEventListener("click", squareColor7);
// square18.addEventListener("click", squareColor10);
// square19.addEventListener("click", squareColor1);
// square20.addEventListener("click", squareColor6);
// square21.addEventListener("click", squareColor12);
// square22.addEventListener("click", squareColor11);
// square23.addEventListener("click", squareColor4);
// square24.addEventListener("click", squareColor5);
//
//
// function squareColor1() {
//   this.style.backgroundColor = color1;
// }
//
// function squareColor2() {
//   this.style.backgroundColor = color2;
// }
//
// function squareColor3() {
//   this.style.backgroundColor = color3;
// }
//
// function squareColor4() {
//   this.style.backgroundColor = color4;
// }
//
// function squareColor5() {
//   this.style.backgroundColor = color5;
// }
//
// function squareColor6() {
//   this.style.backgroundColor = color6;
// }
//
// function squareColor7() {
//   this.style.backgroundColor = color7;
// }
//
// function squareColor8() {
//   this.style.backgroundColor = color8;
// }
//
// function squareColor9() {
//   this.style.backgroundColor = color9;
// }
//
// function squareColor10() {
//   this.style.backgroundColor = color10;
// }
//
// function squareColor11() {
//   this.style.backgroundColor = color11;
// }
//
// function squareColor12() {
//   this.style.backgroundColor = color12;
// }
