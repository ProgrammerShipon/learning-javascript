var x = 5;

function test() {
  var x = 10;
  // console.log(x);

  function nested() {
    var y = 65;
    console.log(x);
  }

  // console.log(y);

  nested();
  
}
// test();

var a = 11;

function A() {
  var b = 12;
  
  function B(){
    var c = 25;
    console.log(c);
  }

  function C(){
    var d = 56;
    console.log(d);
  }

  console.log(b); // print korbe = 12;
  D('12'); // print korbe = 23;
  B();  //  print korbe = 23;
  C();  // print korbe  = 56;

}

A();

function D(n) {
  return n + a;
}




// Scope 
// A  --> a, b, B(), C(), D(), 
// B  --> a, b, c, B(), C(), D(), 
// C  --> a, b, d, B(), C(), D(), 
// C  --> a, b, d, B(), C(), D(), 
// D  --> a, n, A();

