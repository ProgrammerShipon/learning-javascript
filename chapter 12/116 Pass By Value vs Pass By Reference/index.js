
// Pass by Value vs Pass by Reference
// Call by Value vs Call by Reference

var n = 10;

function change(n) {
   n = n + 100;
   console.log('function : ' + n);
}
change(n);
console.log('out console : ' + n);


var obj = {
   a: 10,
   b: 20
}
function changeMe(obj) {
   obj.a = obj.a + 100
   obj.b = obj.b + 100
   console.log('funtion console : ' + obj)
}
changeMe(obj);
console.log(obj)