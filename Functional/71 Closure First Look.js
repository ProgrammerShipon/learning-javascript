
// First Look at Closure 

var b = 10
function a() {
  var x = 5;

  console.log('global variable : ' , b);

  return function () {
    console.log(x);
  }
}

var abc = a ()
console.dir(abc)

