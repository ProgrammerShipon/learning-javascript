console.clear();
// function sqr (n) {
//   return n*n;
// }
// console.log(sqr())

//   Solution-1
// function sqr (n) {
//   if (!n) {
//     n = 1
//   }
//   return n*n;
// }
// console.log(sqr())
//   Solutions-2
// function sqr (n) {
//   n = n || 1;
//   return n*n;
// }
// console.log(sqr())
//   Solutions-3
// function sqr (n=1) {
//   return n*n;
// }
// console.log(sqr())

// function greet (msg, name) {
//   console.log(`${msg}! ${name}`);
// }
// greet('Hello', 'Shipon Hossen')

// ei method ta vul
function greet ( msg='Hello', name='Shipon Hossen' ) {
  console.log(name.length)
  console.log(`${msg}! ${name}`);
}
greet('hi', null)