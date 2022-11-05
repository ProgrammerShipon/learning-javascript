console.clear();

let Obj = {
  start: 1,
  end: 3,
  [Symbol.iterator]: function () {
    let currentValue = this.start
    let self = this.end
    return {
      next () {
        return {
          done: currentValue > self,
          value: currentValue > self ? undefined : currentValue++
        }
      }
    }
  }
}
// for (let printObj of Obj) {
//   console.log(printObj)
// }

let iterate = Obj[Symbol.iterator]()
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
console.log(iterate.next())
