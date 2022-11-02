
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

Square.prototype.common = function () {
  console.log('I am Calling From Square and I have Orerridden');
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
  // Shape.prototype.common.call(this)
  console.log('I am Calling From Circle and I have Orerridden');
}

const c = new Circle(4, 'black');

const s = new Shape('pirple');

const shapes = [sqr , c , s]

for ( let i of shapes ) {
  i.common();
}

// Parent check
console.log('c instaceof Circle ');
console.log(c instanceof Circle);

console.log('c instaceof Shape ');
console.log(c instanceof Shape);

console.log('c instaceof Square ');
console.log(c instanceof Square); 
