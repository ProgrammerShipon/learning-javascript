console.clear();

const obj = {
  a: 10,
  b: 20
}
console.log(Object.entries(obj))

const arr = [
  ['a', 30],
  ['b', 40]
]
console.log(Object.fromEntries(arr))