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
  count = 0;
  width = 10;
  height = 10;
  columns;
  rows;
  princy = {};
  marioX; marioY;
  constructor() {
  }

  ngOnInit() {
    this.width = +prompt('Please enter board width', "10");
    if (!isNaN(this.width)) {
      this.height = +prompt('Please enter board height', "10");
    }
    else {
      alert("Please enter number");
    }

    this.marioX = this.getRandomInt(this.width);
    this.marioY = this.getRandomInt(this.height);
    var no_of_princess = (this.height * this.width) / 8;
    for (var i = 0; i < no_of_princess; i++) {
      var a = {};
      a[this.getRandomInt(this.height) + "," + this.getRandomInt(this.width)] = true;
      this.princy = Object.assign(this.princy, a);
    }
    this.columns = new Array(this.height);
    this.rows = new Array(this.width);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  getCords(i, j) {
    return `${i},${j}`
  }

  hotkeys(event) {
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
  princyCheck() {
    if (this.princy[this.marioX + "," + this.marioY] == true) {
      delete this.princy[this.marioX + "," + this.marioY];
    }

    if (Object.keys(this.princy).length == 0) {
      alert('Game Over! Total moves to save princess :' + this.count);
    }

  }
}
