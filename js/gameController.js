const beginGame = function() {
  start = document.getElementById('start');
  start.onclick = startGame;
  game = new Game();
}

const startGame = function() {
  fruit = document.getElementById('fruit');
  bowl = document.getElementById('bowl');
  throwFruitFromPos();
  start.onclick = null;
};

const setFruitPos = function() {
  fruitPosition = Math.floor(Math.random() * 1250);
  game.setPosOfFruit(fruitPosition);
}

const throwFruitFromPos = function() {
  setFruitPos();
  fruit.style.left = `${game.fruit.horizontalPos}px`;
  intervals = setInterval(fallFruit, 50);
}

const actionTobePerformed = function() {
  if (game.isFruitInBowl()) {
    updateScore();
  }
  if (game.isFruitNotInBowl()) {
    alertScore();
    restartGame();
  }
}

const alertScore = function() {
  let score = document.getElementById('score').innerText;
  alert('game over'+'\n'+`your score:${score}`);
}

const fallFruit = function() {
  fruit.style.top = `${game.fruit.verticalPosition}px`;
  actionTobePerformed();
  game.dropFruit();

}

const updateScore = function() {
  document.getElementById('score').innerText++;
  clearInterval(intervals);
  game.fruit = new Fruit();
  throwFruitFromPos();
  return;
}

const moveBowlLeftSide = function() {
  game.bowl.HandleBowlPosInBox();
  game.bowl.moveBowlLeft();
  bowl.style.left = `${game.bowl.position}px`;
}

const moveBowlRightSide = function() {
  game.bowl.HandleBowlPosInBox();
  game.bowl.moveBowlRight();
  bowl.style.left = `${game.bowl.position}px`;
}

const moveBowl = function(event) {
  if (event.keyCode == 37) {
    moveBowlLeftSide();
  }
  if (event.keyCode == 39) {
    moveBowlRightSide();
  }
}

const restartGame = function() {
  location.reload();
}

const pause = function() {
  let startButton = document.getElementById("start");
  clearInterval(intervals);
  startButton.onclick = startGame;
}

window.onkeydown = moveBowl;
window.onload = beginGame;
