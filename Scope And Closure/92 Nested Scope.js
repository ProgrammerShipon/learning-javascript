
var x = 5;

function test() {
  var x = 10;

  console.log(x)

  function nested() {
    var y = 15;
    console.log(x);
  }

  // kokhuno posiable na
  // console.log(y)

  nested();
}

test();

