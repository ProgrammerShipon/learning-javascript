var arr = [1,3,5,3,6,7,5,4,3,5,45, 63, 77, 3, 34,9 ];

var result = arr.find(function(value){
  return value === 9;
});

console.log('Find value : ' + result);

var result2 = arr.findIndex(function(value) {
  return value === 4;
})

//===================================================

function myFind(arr, cb){
  for (var i = 0; i < arr.length; i++ ){
    if (cb(arr[i])){
      return 'Index number : ' + i + ' : ' + arr[i];
    }
  }
}


var FindResult = myFind(arr, function(value) {
  return value === 3;
})

console.log(FindResult);