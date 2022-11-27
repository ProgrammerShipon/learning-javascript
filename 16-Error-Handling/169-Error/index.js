
// let n = 10;
// if ( n > 5 ) {
//   throw new Error('N is Greater Than 5');
// }

let n = 5.7976931348623157e+408
if ( n > Number.MAX_VALUE) {
  throw new RangeError('The Number is Too Long.');
}