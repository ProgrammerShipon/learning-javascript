

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

   // this.getPosition = function() {
   //    return position;
   // }

   // Some way

   Object.defineProperty(this, 'position' , {
      get: function() {
         return position;
      }
   })
}

var rect1 = new Rectangles(45, 30);

// console.log(rect1.getPosition())
console.log(rect1.position)