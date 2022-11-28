try {
  console.log('I am Your Error');
  console.log('i am line 2');
  throw new Error ('I am Your Error');
  console.log('i am line 3');
} catch (e) {
 console.log(e.message);
}