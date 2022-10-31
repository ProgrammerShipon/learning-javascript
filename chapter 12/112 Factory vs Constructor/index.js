
var createRect = function(width, height) {
   return {
      width: width,
      height: height,
   
      draw: function() {
         console.log('I am a rectangle');
         this.printProperties();
         console.log(this)
      },
   
      printProperties: function() {
         console.log('My Width is : ' + this.width);
         console.log('My Height is : ' + this.height);
      }
   }
}

// var rect1 = createRect(20, 40);
// rect1.draw();

// var rect2 = createRect(30, 50);
// rect2.draw();

var Rectangle = function(width, height) {
   this.width = width
   this.height = height

   this.draw = function(){
      console.log('I am a rectangle...');
      this.printProperties();
      console.log(this)
   }

   this.printProperties = function() {
      console.log('My Width is ' + this.width);
      console.log('My Height is ' + this.height);
   }
}

// var rect3 = new Rectangle(23, 45);
// rect3.draw();

function myNew(constructor){
   var obj = {};

   Object.setPrototypeOf(obj, constructor.prototype)
   var argsArray = Array.prototype.slice.apply(arguments)
   constructor.apply(obj, argsArray.slice(1))

   return obj;
}


var rect4 = myNew(Rectangle, 34, 56);
rect4.draw()