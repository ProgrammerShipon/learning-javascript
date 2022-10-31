
// shape -> Shape -> Object
// sqr -> square -> Object

// sqr -> Square -> Shape -> Object

// Create Exdent function
function extend (parent, child) {
   child.prototype = Object.create(parent.prototype)
   child.prototype.constructor = child
}

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
// Square.prototype = Object.create(Shape.prototype)
// Reset korar pore
// Square.prototype.constructor = Square;
// Extend function
extend (Shape, Square)



Square.prototype.draw = function () {
   console.log('Drawing');
}

var sqr = new Square(45, 'green')
console.log(sqr)

function Circle (radius, color) {
   Shape.call(this, color)
   this.radius = radius
}
// Circle.prototype = Object.create(Shape.prototype)
// Circle.prototype.constructor = Circle

// extend function
extend(Shape, Circle);

const circle = new Circle(30, 'red')
console.log(circle);
