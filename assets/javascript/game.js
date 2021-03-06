var guessNumber;
var crystals;
var sum = 0;
var win = 0;
var lose = 0;

newGame();
//return random integer in min <= randomInt <= max
function getRandomInt(min, max) {
  var randomInt = Math.round(Math.random() * (max - min)) + min;
  return randomInt;
}

$(".crystal").click(function() {
  var clickedCrystalId = this.id;
  var clickedValue = crystals[clickedCrystalId];
  sum = sum + clickedValue;
  $("#sum").text("Your score :  " + " " + sum);
  if (sum === guessNumber) {
    win = win + 1;
    $("#win").text("No of Wins : " + win);
    askForNewGame("You won.");
  }
  if (sum > guessNumber) {
    lose = lose + 1;
    $("#lose").text("No of Losses : " + lose);
    askForNewGame("You lost.");
  }
});

function askForNewGame(message) {
  setTimeout(() => {
    $("#message").text(message);
    $("#exampleModal").modal("show");
    newGame();
  });
}

//new game

function newGame() {
  guessNumber = getRandomInt(19, 120);
  $("#display").text("Your target score : " + " " + guessNumber);
  crystals = {
    crystal1: getRandomInt(1, 12),
    crystal2: getRandomInt(1, 12),
    crystal3: getRandomInt(1, 12),
    crystal4: getRandomInt(1, 12)
  };
  sum = 0;
  $("#sum").text("Your score :  " + " " + sum);
}
