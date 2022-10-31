

// var Rectangle = function(width, height) {
//    this.width = width
//    this.height = height

//    this.draw = function(){
//       console.log('I am a rectangle...');
//       this.printProperties();
//       console.log(this)
//    }

//    this.printProperties = function() {
//       console.log('My Width is ' + this.width);
//       console.log('My Height is ' + this.height);
//    }
// }

function test() {
   console.log('Something');
}
console.log(test.name, test.length);

var rect = new Function('width', 'height', `this.width = width;
   this.height = height;
   this.draw = function(){
      console.log('I am a rectangle...');
      this.printProperties();
      console.log(this);
   }
   this.printProperties = function() {
      console.log('My Width is ' + this.width);
      console.log('My Height is ' + this.height);
   }`
)

var rect1 = new Rect(4, 5);
console.log(rect1)

