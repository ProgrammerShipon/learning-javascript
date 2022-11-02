
// Extend funtion
function extend (parent, Child) {
  Child.prototype = Object.create(parent.prototype);
  Child.prototype.constructor = Child;
}

// Shape funtion
function Shape (color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log('I am Common Method');
}

function Square (width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend (Shape, Square);

Square.prototype.draw = function () {
  console.log('Drawing');
}

const sqr = new Square (30, 'red');

// shape --> shape --> Object
// sqr --> Square --> Object

// sqr --> Square --> Shape --> Object
function Circle (radius, color) {
  Shape.call (this, color);
  this.radius = radius;
}
extend (Shape, Circle);

Circle.prototype.common = function () {
  Shape.prototype.common.call(this)
  console.log('I am Calling From Circle and I have Orerridden');
}

const c = new Circle(4, 'black');
