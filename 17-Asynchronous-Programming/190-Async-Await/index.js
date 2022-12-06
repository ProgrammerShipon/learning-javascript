// function myPromise () {
//   return Promise.resolve('Test Value')
// }
// console.log(myPromise());


// async function test () {
//   return 'Test Async Function'
// }
// test().then(v => alert(v));


// let p1 = new Promise (resole => {
//   setTimeout(resole , 3000 , 'Test Value');
// })
// async function myAsyncFunc () {
//   // p1.then(v=>alert(v));
//   let v = await p1
//   console.log(v)
//   console.log('complete');
// }
// myAsyncFunc()


// const BASE_URL = 'https://jsonplaceholder.typicode.com/users';
// async function fetchData() {
//   try {

//     let res = await fetch(BASE_URL);

//     let data = await res.json();

//     let names = data.map(u => u.name);
//     console.log(names)
//   } catch (e) {
//     console.log(e.message)
//   }
// }
// fetchData()

let Promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]
async function promiseAll () {
  let result = await Promise.all(Promises)
  console.log(result)
}
promiseAll()