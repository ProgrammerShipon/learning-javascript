// 'use strict'
console.clear();

// Private Data Symbol
const _radius = Symbol();
const _name = Symbol();
const _draw = Symbol();

class Circle {
  constructor (radius, name) {
    this[_radius] = radius;
    this[_name] = name;
  }

  draw () {
    console.log('Drawing..');
  }

  [_draw] () {
    console.log('Symbol Drawing..');
  }
}

let C1 = new Circle(3, 'CRED');
console.log(C1)
console.log(Object.getOwnPropertySymbols(C1))
let key = Object.getOwnPropertySymbols(C1)[1]
console.log(C1[key])
