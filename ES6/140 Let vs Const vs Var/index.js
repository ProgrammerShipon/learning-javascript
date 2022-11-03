// var vs let vs const

// let vs const
let a = 10;
a = 23;
// console.log('let : ' + a);
const b = 30;
// b = 34;
// console.log('const : ' + b);

if (true) {
   // var q = 40;
}
// console.log('var : ' + q);

if (true) {
   let w = 40;
}
// console.log('let block : ' + w);


// Emidiately Invoky
(function() {
   var abc = 'ABC';
   console.log(abc);
})()
// console.log('fnc out : ' + abc )

{
   var defs = 'DEFS';
   console.log(defs);
}
console.log('defs out : ' + defs)