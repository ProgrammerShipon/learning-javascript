// 'use strict'
console.clear();

class Shape {
  constructor (color) {
    this.color = color;
  }

  drow () {
    console.log ('drowing...')
  }
}

class Rectangle extends Shape {
  constructor (color, width, height ) {
    super (color);
    this.width = width
    this.height = height
  }

  drow () {
    console.log('it is drowing...')
  }

}

let r = new Rectangle ('white', 5, 6)
console.log(r)
r.drow();