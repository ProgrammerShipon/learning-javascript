console.clear();

let Obj = {
  start: 1,
  end: 3,
  // [Symbol.iterator]: function () {
  //   let currentValue = this.start
  //   let self = this.end
  //   return {
  //     next () {
  //       return {
  //         done: currentValue > self,
  //         value: currentValue > self ? undefined : currentValue++
  //       }
  //     }
  //   }
  // }
  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while ( currentValue <= this.end ) {
      yield currentValue++
    }
  }
}
// for (let printObj of Obj) {
//   console.log(printObj)
// }
let iterate = Obj[Symbol.iterator]()
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// function* generator () {
//   yield 1
//   yield 2
//   yield 3
// }

const arr = [ 10, 30 , 04]

function* generator ( collection ) {
  for ( let i = 0; i < collection.length; i++ ) {
    yield collection[i]
  }
}

let it  = generator (arr)
console.log(it)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())