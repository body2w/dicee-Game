var score1 = 0;

var score2 = 0;

function start() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);

  var randomimage1 = "./images/dice" + randomNumber1 + ".png";

  document.getElementsByClassName("img1")[0].setAttribute("src", randomimage1);

  var randomNumber2 = Math.floor(Math.random() * 6 + 1);

  var randomimage2 = "./images/dice" + randomNumber2 + ".png";

  document.getElementsByClassName("img2")[0].setAttribute("src", randomimage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " player 1 wins!";

    score1++;

    document.getElementById("scoreOne").innerHTML = score1;
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 wins! ";

    score2++;

    document.getElementById("scoreTwo").innerHTML = score2;
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
