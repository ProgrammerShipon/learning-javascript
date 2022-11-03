console.clear();

// function sum () {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }

//   return sum
// }
// console.log(sum(1,2,3,4,5));


// function sum (...rest) {
//   // console.log(rest)
//   return rest.reduce((a,b) => a + b)
// }
// console.log(sum(1,2,3,4,5,6));

// Spread Operator
// let a = [1, 2, 3, 4]
// console.log(...a);

let obj = {
  a: 10,
  b: 20,
  c: 30
}

let obj2 = {
  ...obj
}
console.log(obj)
console.log(obj2)