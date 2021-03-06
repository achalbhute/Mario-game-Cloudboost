import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-arena',
  host: {
    '(window:keydown)': 'hotkeys($event)'
  },
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  width = 10;
  height = 10;
  princy = {};
  count; reset;
  columns; rows;

  marioX; marioY;
  constructor() {
  }

  ngOnInit() {
    this.startGame();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  getCords(i, j) {
    return `${i},${j}`
  }

  hotkeys(event) {
    if (this.reset == 1)
      this.startGame();
    else {
      switch (event.keyCode) {
        case 37:
          if (this.marioX != 0) {
            this.marioX--;
            this.count++;
          }
          break;
        case 39:
          if (this.marioX != this.width - 1) {
            this.marioX++;
            this.count++;
          }
          break;
        case 38:
          if (this.marioY != 0) {
            this.marioY--;
            this.count++;
          }
          break;
        case 40:
          if (this.marioY != this.height - 1) {
            this.marioY++;
            this.count++;
          }
          break;
      }
      this.princyCheck();
    }
  }
  princyCheck() {
    if (this.princy[this.marioX + "," + this.marioY] == true) {
      delete this.princy[this.marioX + "," + this.marioY];
    }
    if (Object.keys(this.princy).length == 0) {
      alert('Game Over! Total moves to save princess :' + this.count);
      this.reset = 1;
    }
  }
  startGame() {
    this.count = 0;
    let correctInput = false;
    while (!correctInput) {
      this.width = +prompt('Please enter board width', "10");
      if (!isNaN(this.width) && this.width>1) {
        this.height = +prompt('Please enter board height', "10");
        if (!isNaN(this.height) && this.height>1) {
          correctInput = true;
        } else {
          alert("Please enter valid number(>1)");
        }
      } else {
        alert("Please enter valid number(>1)");
      }
    }
    this.reset = 0;
    this.marioX = this.getRandomInt(this.width);
    this.marioY = this.getRandomInt(this.height);
    var no_of_princess = (this.height * this.width) / 8;
    for (var i = 0; i < no_of_princess; i++) {
      var a = {};
      a[this.getRandomInt(this.width) + "," + this.getRandomInt(this.height)] = true;
      this.princy = Object.assign(this.princy, a);
    }
    if (this.princy[this.marioX + "," + this.marioY]) delete this.princy[this.marioX + "," + this.marioY];
    this.columns = new Array(this.height);
    this.rows = new Array(this.width);
  }
}
