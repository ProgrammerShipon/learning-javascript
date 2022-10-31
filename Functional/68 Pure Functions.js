

// What is Pure Function ?

//`
  // * It Returns the same result if given the same arguments 
  // * It does not cause any observable side effects
//`


function sqr(n) {
  return n*n;
}
console.log('Pure Function : ' + sqr(2));
console.log('Pure Function : ' + sqr(3));


var a = 10;
function change() {
  a = 100;
}
change();
console.log('Non-Pure Function : ' , a);

var point = {
  x: 45,
  y: 30
}

function printPoint(point) {
  point.x = 100
  point.y = 200

  console.log(point);
}

printPoint(point);
console.log(point);



