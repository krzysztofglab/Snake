import { Utils } from "./Utils.js";

export class Snake extends Utils {
  constructor(boardWidth, boardHeight) {
    super();
    this.alive = true;
    this.directions = ['up', 'right', 'down', 'left'];
    this.direction = this.directions[2];
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.position = [
      {
        x: 5,
        y: 5
      }
    ];
    this.length = 1;
    this.initKeyboardEvent();
  }

  process(point) {
    if(this.alive) {
      this.point = point;
      this.movement();
    }
  }

  checkPoint() {
    if(this.point.x == this.position[0].x && this.point.y == this.position[0].y) {
      document.querySelector(`[data-position="x${this.point.x}y${this.point.y}"]`).classList.remove('point');  
      const x = this.position[0].x;
      const y = this.position[0].y;
      this.length++;
      this.position.push({x, y});
      this.point.create();
    }
  }

  draw() {
    this.position.forEach(pos => {
      document.querySelector(`[data-position="x${pos.x}y${pos.y}"]`).classList.add(`snake`);
    })
  }

  movement() {
    this.checkPoint();

    let x = this.position[0].x;
    let y = this.position[0].y;

    switch (this.direction) {
      case 'up':
        y -= 1;
        break;
      case 'right':
        x += 1;
        break;
      case 'down':
        y += 1;
        break;
      case 'left':
        x -= 1;
        break;
    }

    console.log(x + ' ' + y);

    const containsBorder = document.querySelector(`[data-position="x${x}y${y}"]`).classList.contains('border');
    const containsSnake = document.querySelector(`[data-position="x${x}y${y}"]`).classList.contains('snake');

    if(containsBorder || containsSnake) {
      alert(this.length);
      this.alive = false;
    } else {
      this.position.unshift({x, y});

      const lastPos = this.position.pop();
      document.querySelector(`[data-position="x${lastPos.x}y${lastPos.y}"]`).classList.remove(`snake`);
  
      this.draw();
    }


  }

  changeDirection(event) {
    const key = event.keyCode;

    switch(key){
      case 37:
      if(this.direction != 'right'){
        this.direction = 'left';
      }
      break;
      case 38:
      if(this.direction != 'down'){
        this.direction = 'up';
      }
      break;
      case 39:
      if(this.direction != 'left'){
        this.direction = 'right';
      }
      break;
      case 40:
      if(this.direction != 'up'){
        this.direction = 'down';
      }
      break;
    }
  }

  initKeyboardEvent() {
    document.querySelector('body').addEventListener('keydown', this.changeDirection.bind(this));
  }
}