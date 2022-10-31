
function Square (width) {
   // Instance members
   this.width = width;
   this.getWidth = function () {
      console.log('Width is ' + this.width); 
      // this.draw();
   }
}
// ki ki Instance member ache
console.log(Object.keys(sqr1));

Square.prototype = {
   // Proto Members
   draw: function() {
      console.log('Draw');
      this.getWidth()
   },
   toString: function () {
      return 'My width is = ' + this.width
   }
}

var sqr1 = new Square(10);
var sqr2 = new Square(5);
// All members 
for (var i in sqr1) {
   console.log(i);
}


