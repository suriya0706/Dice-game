var x = Math.floor((Math.random() * 6) + 1);
var y = Math.floor((Math.random() * 6) + 1);
var randomDiceImage1 ="dice" + x + ".png";
var randomDiceImage2 ="dice" + y + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (x>y) {
    document.querySelectorAll("h1").innerHTML= "Player 1 wins";
} else if (y>x) {
    document.querySelectorAll("h1").innerHTML= "Player 2 wins";
}