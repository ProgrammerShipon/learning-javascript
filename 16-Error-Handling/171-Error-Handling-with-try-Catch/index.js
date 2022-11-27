
/*
function makeWords (text) {
  let str = text.trim();
  let words = str.split(' ');

  return words
}
let words = makeWords('               I am shipon hossen raju       ');
console.log(words);
let numbers = makeWords(84);
console.log(numbers);
*/


function makeWords (text) {
  try {
    let str = text.trim();
    let words = str.split(' ')

    return words
  } catch (e) {
    // console.log(e)
    // console.log(e.message)
    console.log('Please provide a valid text');
  }
}
let words = makeWords('               I am shipon hossen raju       ');
console.log(words);
let numbers = makeWords(84);
numbers