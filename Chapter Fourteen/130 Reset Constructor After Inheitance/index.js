
// Inheritance System
// shape -> Shape -> Object
// sqr -> square -> Object
// sqr -> Square -> Shape -> Object

function Shape() {
}
Shape.prototype.common = function () {
   console.log('I am Common Method');
} 

// Constractor
function Square(width) {
   this.width = width;
}

// Inheritance
Square.prototype = Object.create(Shape.prototype)
// Reset korar pore
// Square.prototype.constructor = Square;

Square.prototype.draw = function () {
   console.log('Drawing');
}

// Square.prototype = {
//    test: function () {
//    }
// }


var shape = new Shape()
var sqr = new Square(45)



// inheritance
// function Circle() {
// }
// Circle.prototype = Object.create(Shape.prototype)
// var ccl = new Circle()



