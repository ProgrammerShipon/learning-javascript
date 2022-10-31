

var arr = [1, 3, 4]

var sqrArr = arr.map(function(value){
  // return Math.random() * 100;
  return value * value;
})

console.log('Original Array : ' + arr);
console.log('Modify Array : ' + sqrArr);

var arr2 = [1, 3, 4]

function myMap(arr2 , cb ) {
  var newArr = [];
  for (var i = 0; i <= (arr2.length - 1); i++) {
    var temp = cb (arr[i]);
    newArr.push(temp);
  }
  return newArr;
}

// console.log('Function Sqr : ' + myMap(arr));

var results = myMap(arr2, function(value) {
  return value * value * value;
})

console.log('qub : ' + results)