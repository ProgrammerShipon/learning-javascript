/*
let pr1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'One');
})
// console.log(pr1)
pr1.then((v) => {
  // console.log(v)
})

let pr2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'two');
})
// console.log(pr2)
pr2.then((v) => {
  // console.log(v)
})

function getIphone ( isPassed ) {
  return new Promise ((resolve, reject) => {
    setTimeout ( () => {
      if ( isPassed ) {
        resolve ('I have Got an I Phone');
      } else {
        reject (' Your have Failed.');
      };
    },  2000);
  });
};
console.log(getIphone(false));
*/


function getIphone ( isPassed ) {
  return new Promise ((resolve, reject) => {
    setTimeout ( () => {
      if ( isPassed ) {
        resolve ('I have Got an I Phone');
      } else {
        reject (new Error(' Your have Failed.'));
      };
    },  2000);
  });
};

getIphone(true)
  .then ((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err)
  })