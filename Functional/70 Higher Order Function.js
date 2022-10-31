
function add(a , b) {
  return a + b;
}

function manipulation(a, b, func) {
  var c = a - b;
  var d = a + b;

  // function multiply() {
  //   var m = func;
  //   return c * d * m;
  // }
  // return multiply();

  return function() {
    var m = func(a , b)

    return C*d*m;
  }

}

var multiply = manipulation(4, 3, add(3, 3));
console.log(multiply)


// 5. We Can pass Function  as an Arguments


// 6. We can return Functions from Another Function