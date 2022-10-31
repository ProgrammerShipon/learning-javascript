

// // var Rectangle = function(width, height) {
// //    this.width = width
// //    this.height = height

// //    this.draw = function(){
// //       console.log('I am a rectangle...');
// //       this.printProperties();
// //       console.log(this)
// //    }

// //    this.printProperties = function() {
// //       console.log('My Width is ' + this.width);
// //       console.log('My Height is ' + this.height);
// //    }
// // }

// function test() {
//    console.log('Something');
// }
// console.log(test.name, test.length);

// var rect = new Function('width', 'height', `this.width = width
//    this.height = height

//    this.draw = function(){
//       console.log('I am a rectangle...');
//       this.printProperties();
//       console.log(this)
//    }

//    this.printProperties = function() {
//       console.log('My Width is ' + this.width);
//       console.log('My Height is ' + this.height);
//    }`
// )

// var rect1 = new Rect(4, 5);
// console.log(rect1)

function myFunc(c , d){
   console.log(this);
   console.log(this.a + this.b + c + d);
}
// myFunc();

// Call
// Apply
// Bind

// myFunc.call({a: 30, b: 32})
// myFunc.call({a: 45, b: 67})
// myFunc.apply({a: 50, b: 60}, [10 , 20])

var testBind = myFunc.bind({a: 20, b: 10});
testBind(5, 6);