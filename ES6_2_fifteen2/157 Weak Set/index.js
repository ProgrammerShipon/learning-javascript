console.clear();

let a = {a: 20}, b = {b: 40}
let set = new Set([a, b])
a = null // wrong way
// console.log(set) 

let arr = [...set] // back a , no null ,. memory lik
console.log(arr[0]);

let c = { c: 40 } , d = { d: 40}
let weakSets = new WeakSet([c, d]); // only object
console.log(weakSets);
c = null
console.log(weakSets);
console.log(weakSets.has(c))
console.log(weakSets.has(d))
