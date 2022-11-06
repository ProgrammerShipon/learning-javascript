console.clear();

let set = new Set([1, 2, 3, 4]);
set.add(5);
set.add(4);
set.add(6);
console.log('main set : ' + set);
console.log('set size : ' + set.size);
console.log('set clear : ' + set.clear);
console.log('set delete : ' + set.delete(2));
console.log('set size : ' + set.size);
console.log('set Has : ' + set.has(3));
console.log('set keys : ' + set.keys());
console.log('set Values : ' + set.values());

let keyIterate = set.values()
console.log(keyIterate.next())
console.log(keyIterate.next())

function isIterable (obj) {
  return typeof obj[Symbol.iterator] === 'function'
}
console.log(isIterable(set))

for ( let v of set ) {
  console.log(v )
}

console.log('set Entries' + set.entries())