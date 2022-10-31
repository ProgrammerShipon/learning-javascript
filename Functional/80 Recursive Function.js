
// Loop work
function sayHi(n){
  if(n===0) {
    return
  }

  console.log('Hi, I am Calling')
  sayHi(n - 1);
}
sayHi(10);


function sum(m){
  if(m === 1) {
    return 1
  }
  return m + sum(m-1);
}
console.log('sumation numbar : ' , sum(5))


function fact(n){
  if(n===1){
    return 1
  }
  return n * fact(n-1);
}
console.log('factorial number : ' , fact(5))


var arr = [1,2,3,4,5,6,7]

function sumOfArray(arr, lastIndex) {
  if(lastIndex < 0) {
    return 0
  }

  return arr[lastIndex] + sumOfArray(arr, lastIndex - 1)
}
console.log(sumOfArray(arr, arr.length - 1))