export class UI {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.generateMap();
  }

  generateMap() {
    const eTable = document.createElement('table');

    for(let y=0; y<this.height; y++) {
      const eTr = document.createElement('tr');

      for(let x=0; x<this.width; x++) {
        const eTd = document.createElement('td');
        eTd.dataset.position = `x${x}y${y}`;
        const xEven = x%2;
        const yEven = y%2;
        const res = xEven + yEven;

        if(res == 2 || res == 0) {
          eTd.classList.add('even');
        } else {
          eTd.classList.add('odd');
        }

        if(x == 0 || x == this.height-1 || y == 0 ||  y == this.width-1) {
          eTd.classList.add('border');
        }

        if(
          (y == 5) &&
          (x == 5 || x == 6 || x == 7)
        ) {
          eTd.classList.add('border');
        }

        eTr.appendChild(eTd);
      }

      eTable.appendChild(eTr);
    }

    document.body.appendChild(eTable);
  }
}

