import { Point } from "./Point.js";
import { Snake } from "./Snake.js";
import { UI } from "./UI.js";

export class Game extends UI {
  constructor() {
    super(15, 15);
    this.point = new Point(this.width, this.height);
    this.snake = new Snake();
    this.speed = 100;
    this.update();
  }

  update() {
    this.snake.process(this.point);
    setTimeout(this.update.bind(this), this.speed);
  }
}