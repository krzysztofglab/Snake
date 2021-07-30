import { Utils } from "./Utils.js";

export class Point extends Utils {
  constructor(boardWidth, boardHeight) {
    super();
    this.boardHeight = boardHeight;
    this.boardWidth = boardWidth;
    this.create();
  }

  create() {
    let busy = true;

    while(busy) {
      this.x = this.random(1, this.boardWidth-2);
      this.y = this.random(1, this.boardHeight-2);
      if(!document.querySelector(`[data-position="x${this.x}y${this.y}"]`).classList.contains('snake')) {
        busy = false;
      }
    }

    this.draw();
  }

  draw() { document.querySelector(`[data-position="x${this.x}y${this.y}"]`).classList.add('point') }
}