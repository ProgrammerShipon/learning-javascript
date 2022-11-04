console.clear();

// let a = 10, b = 20;
// let obj = {
//   a: a,
//   b: b 
// }
// console.log(obj);

// let a = 10, b = 20;
// let obj = {
//   a,
//   b, 
//   print: function () {
//     console.log(this)
//   }
// }
// obj.print();

let a = 10, b = 20;
let obj = {
  a,
  b, 
  print () {
    console.log(this)
  }
}
obj.print();