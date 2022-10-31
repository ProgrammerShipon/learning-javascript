

// shape ==> Shape ==> Object
// sqr ==> Square ==> Object

function Shape () {

}

Shape.prototype = {
   common: function () {
      console.log('I am Common Method');
   }
}

function Square (width) {
   this.width = width
}

Square.prototype = Object.create(Shape.prototype);

Square.prototype.draw = function () {
      console.log("Drawing")
   }

const shape = new Shape(45);
const sqr = new Square(32)


// needed = sqr ==> Square ==> Shape ==> Object

function Circle() {

}
Circle.prototype = Object.create(Shape.prototype);
const circle = new Circle(10);
console.log(circle);



