console.clear();

let weakMap = new WeakMap ([[a, 45], [b,40]])
console.log(weakMap);

a = null
 console.log(weakMap.get(a))
 console.log(weakMap.has(a))
 console.log(weakMap.has(b))

