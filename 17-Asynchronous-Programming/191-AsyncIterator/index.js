
let asynIterable = {
  [Symbol.asyncIterator] () {
    let i = 0;
    return {
      next () {
        if ( i < 5 ) {
          return Promise.resolve({
            value: i++,
            done: false
          })
        } else {
          return Promise.resolve({
            done: true
          })
        }
      }
    }
  }
}
let iterate = asynIterable[Symbol.asyncIterator]();
// console.log(iterate.next())

(async function () {
  // let v = await iterate.next();
  // console.log(v)

  console.log(await iterate.next())
  console.log(await iterate.next())
  console.log(await iterate.next())
  console.log(await iterate.next())
  console.log(await iterate.next())
  console.log(await iterate.next())
})()