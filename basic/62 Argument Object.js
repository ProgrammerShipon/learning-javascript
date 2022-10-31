
var a = [2,5,3,7,9,6,4,3,435,6];

function sumOfFunction(arr) {
  var sum = 0;

  for (var i = 0; i <= (arr.length - 1 ); i++ ) {
    sum += arr[i];
  }
  console.log('Array Sum : ', sum );
}
sumOfFunction(a);



function test() {
  for (var i = 0; i <= (arguments.length -1); i++ ) {
    console.log(arguments[i]);
  } 
}
test(34,34,656,76,3,5);

function addAll() {
  var sum = 0;
  for (var i = 0; i < (arguments.length - 1 ); i++ ) {
    sum += arguments[i];
  }
  console.log('Add All Sum : ', sum);
}

addAll(5,3,7,3);


