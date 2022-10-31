
// shape -> Shape -> Object
// sqr -> square -> Object

// sqr -> Square -> Shape -> Object


function Shape(color) {
   this.color = color;
}

Shape.prototype.common = function () {
   console.log('I am Common Method');
} 

// Constractor
function Square(width , color) {
   Shape.call(this, color)
   this.width = width;
}

// Inheritance
Square.prototype = Object.create(Shape.prototype)
// Reset korar pore
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
   console.log('Drawing');
}

var sqr = new Square(45, 'green')
console.log(sqr)
