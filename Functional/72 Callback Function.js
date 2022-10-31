

function sample (a, b) {
  var c = a + b;
  var d = a - b;

  var result = sum( c , d);
  return result;
}

function sum(a, b) {
  return a + b;
}
console.log(sample(5, 8))

// ---------------------------------

function sample2 (a, b, cb ) {
  var c = a + b;
  var d = a - b;

  var result = cb( c, d);

  return result;
}

function sub ( a , b ) {
  return a - b;
}

console.log(sample2(5 , 6, sub))

// ---------------------------------

function sample3 (a, b, cb) {
  var c = a + b;
  var d = a - b;

  var result = cb(c, d);
  return result;

}

var result3 = sample3 (5, 8, function (c , d) {
  return c + d;
})

console.log(result3);

var result4 = sample3 (6, 5, function(c, d ) {
  return c * d;
})
console.log(result4);

