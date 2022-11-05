console.clear();

const arr = [1, 2, 3, 4]

// console.log(arr[Symbol.iterator])
let iterateSym = arr[Symbol.iterator]()
// console.log(iterateSym)
// console.log(iterateSym.next())
// console.log(iterateSym.next())
// console.log(iterateSym.next())
// console.log(iterateSym.next())
// console.log(iterateSym.next())

let str = 'TEXT';
let iterateText = str[Symbol.iterator]()
console.log(iterateText)
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())
console.log(iterateText.next())

