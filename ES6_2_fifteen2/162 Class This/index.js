// 'use strict'

console.clear();

function Shape () {
  this.draw = function () {
    console.log(this)
  }
}

let s1 = new Shape()
let anotherDraw = s1.draw
anotherDraw();

class Person {
  constructor (name, email) {
    this.name = name;
    this.email = email;
  }

  test () {
    console.log(this)
  }
}
let p1 = new Person ('Shipon', 'ms.shipon@gmail.com');
let test = p1.test
test();

