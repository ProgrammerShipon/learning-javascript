

var Rectangles = function (width , height){

   var position = {
      x: 34,
      y: -100
   }

   this.width = width;
   this.height = height;

   var printProperties = function () {
      console.log('My Width is ' + this.width);
      console.log('My height is ' + this.height);
   }.bind(this)

   this.draw = function(){
      console.log('I am a rectangle');
      printProperties();
      console.log(this);
   }
}

var rect1 = new Rectangles(45, 30);

var rect2 = new Rectangles.printProperties