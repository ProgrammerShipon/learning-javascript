
var arr = [2,4,5,3,6,7,3,65,4,6,44,3,2,5,5,2,3,54,74]

var filtered = arr.filter(function(value){
  return value % 2 === 1 
})

// console.log('Odd Number : ' + filtered);


//===================================================

function myFilter(arr, cb) {
  var newArr = []
  for (var i = 0; i <= ( arr.length - 1); i++) {
    if (cb(arr[i], i, arr)){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myFilter(arr, function(value){
    return value % 2 === 0;
  })
)

console.log(
  myFilter(arr, function(value){
    return value > 10;
  })
)
