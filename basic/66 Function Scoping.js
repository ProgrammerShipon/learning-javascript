

var a = 'global abc';


if (true) {
  if(true) {
    var b = 'I am B';
  }
}
console.log(b);


function x() {
  var a = 'x function a';
  
  function y() {
    var a = 'y function a';

    function z() {
      var a = 'z function a';
      console.log(a);
    }

    console.log(a);
    z();
    
  }

  console.log(a);
  y();

}
x();

function test(n) {

  function a() {
    return n%3 == 0;
  }

  function b() {
    return n%5 == 0;
  }

  if ( a() && b() ) {
    console.log ( n + ' is divisible by both 3 and 5');
  } else {
    console.log('Not a valid number');
  }
}
test(45);
