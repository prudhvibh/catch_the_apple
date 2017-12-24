let Game = function() {
  this.fruit = new Fruit();
  this.bowl = new Bowl();
}

Game.prototype = {
  setPosOfFruit: function(pos) {
    this.fruit.horizontalPos = pos;
    },

  dropFruit: function() {
    this.fruit.drop();
  },

  isFruitAndBowlInStraightLine: function() {
    let matchedPos = [];
    let fruitPos = this.fruit.horizontalPos;
    for(let index=0;index<100;index++){
      matchedPos.push(fruitPos);
      fruitPos--;
    }
    return matchedPos.includes(this.bowl.position);
  },

  isFruitInBowl: function() {
    return this.isFruitAndBowlInStraightLine() && this.fruit.verticalPosition > 580;
  },

  isFruitNotInBowl: function() {
    return game.fruit.verticalPosition == 630;
    }
  }
