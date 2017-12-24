let Fruit = function() {
  this.speed = 5;
  this.horizontalPos = 0;
  this.verticalPosition = 150;
}

Fruit.prototype = {
  drop: function() {
    this.verticalPosition += this.speed;
  }
}

let Bowl = function() {
  this.position = 0;
}

Bowl.prototype = {
  moveBowlLeft: function() {
    this.position -= 20;
  },

  moveBowlRight: function() {
    this.position += 20;
  },

  HandleBowlPosInBox: function() {
    if(this.position < 0) this.position = 0;
    if(this.position > 1200) this.position = 1200;
  }
}
