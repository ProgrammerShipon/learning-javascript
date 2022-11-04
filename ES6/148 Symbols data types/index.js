console.clear();

let s1 = Symbol();
let s2 = Symbol('test symbol');

console.log(s1)
console.log(s2)
console.log(s1===s2)

let toss = {
  HEAD: Symbol('HEAD'),
  TAIL: Symbol('TAIL')
}
console.log(toss.HEAD)


