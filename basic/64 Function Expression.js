
// function expression
var addition = function(a, b) {
  return a+b;
}

addition(23, 17)

setTimeout(
  function () {
    console.log('I Will Call after 5 second');
  }, 5000
)

var another = addition;
console.log(another(5,6));
