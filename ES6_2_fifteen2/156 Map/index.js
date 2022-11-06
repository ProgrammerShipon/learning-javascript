console.clear();


let map = new Map ( [
  ['a', 10],
  ['b', 20],
  ['c', 30]
] )
map.set('d', 40)


console.log(map)
map.delete('c')
// console.log(map.clear())
console.log('map get ' + map.get('b'))
console.log(map.values())
console.log(map.keys())
console.log(map.entries())


// for (let [k , v] of map) {
//   console.log(k , v)
// }

map.forEach((k , v) => {
  console.log(k , v)
})

map.set({name: 'Shipon Hossen Raju'}, 50)
console.log(map)
