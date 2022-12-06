let arr = [1, 2, 3, 4, 5, 6,];
let sqrArr = arr.map(v => v * v);
// console.log(sqrArr)

function asyncMap( arr, cb ) {
  return arr.map( v => {
    // setTimeout( cb.bind(null, v), 0)
    setTimeout( () => cb(v), 0)
  })
}
let qbArr = asyncMap(arr, v => {
  let qb = v * v * v;
  console.log(qb)
  return qb
})
console.log(qbArr)