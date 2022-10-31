var arr = [1, 2, 3, 4, 5, 6]
var sum = arr.reduce(function(prev, curr) {
  return prev + curr;
}, 100)

var max = arr.reduce(function(prev, curr) {
  return Math.max(prev, curr)
}, 0)

// console.log(sum)
// console.log(max)

//======================================================

var arr1 = [2,3,53,5,7,5,3,6,46,5];

function myReduce(arr1, cb, acc) {

  for (var i = 0; i < arr1.length; i++ ) {
    acc = cb (acc, arr1[i]);
  }

  return acc;

}

var sum = myReduce(arr1, function(prev, curr) {
  return prev + curr;
}, 0)

var max = myReduce(arr1, function(prev, curr){
  return Math.max(prev , curr);
}, 0)

var min = myReduce(arr1 , function(prev , curr ) {
  return Math.min(prev , curr);
}, arr[0])

console.log('Sum : ' + sum, ', Max : ' + max, ', Min : ' + min );
