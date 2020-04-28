//Angela did it differently... but yours is correct!

var player1Dice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];
var player2Dice = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

document.querySelector(".dice-btn").onclick = function() {changeDice()}; //have to add an event listener
// document.querySelector(".dice-btn").onclick = window.location.reload();

function changeDice(){
  var random1 = Math.floor(Math.random(player1Dice) * 6);
  var random2 = Math.floor(Math.random(player2Dice) * 6);
  document.querySelector(".img1").src = player1Dice[random1];
  document.querySelector(".img2").src = player2Dice[random2];
  if(random1 > random2){
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
  } else if( random1 < random2){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
}
