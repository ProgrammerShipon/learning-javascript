// const delay = s => new Promise(resolve => setTimeout(resolve, s*1000));
// delay(2).then( () => console.log('3 Seconds Delay'));
// delay(5).then( () => console.log('5 Seconds Delay'));
// delay(4).then( () => console.log('4 Seconds Delay'));
// delay(1).then( () => console.log('1 Seconds Delay'));
// delay(3).then( () => console.log('3 Seconds Delay'));

// let p1 = Promise.resolve('Test');
// p1.then(v => console.log(v))
// let p2 = Promise.reject('Reject');
// p2.then(v => console.log(v))

// let P1 = Promise.resolve('One')
// let P2 = Promise.resolve('Two')
// let P3 = Promise.resolve('Three')
// let promiseArr = [P1, P2, P3];
// Promise.all(promiseArr)
//   .then(arr => {
//     console.log(arr)
//   })

let pt1 = new Promise(resolve => {
  setTimeout(resolve, 5000, 'One');
})
let pt2 = new Promise(resolve => {
  setTimeout(resolve, 4000, 'Two');
})
let pt3 = new Promise(resolve => {
  setTimeout(resolve, 3000, 'Three');
})
let pt = [pt1, pt2, pt3]
Promise.all(pt)
  .then(arr => console.log(arr))

Promise.race(pt)
  .then(p => console.log(p))
  .catch(err => console.log(err))