
function Square (width) {
   // Instance members
   this.width = width;

}

Square.prototype = {
   // Proto Members
   draw: function() {
      console.log('Draw');
   },
   toString: function () {
      return 'My width is = ' + this.width
   }

}

var sqr1 = new Square(10);
var sqr2 = new Square(5);
