

function addi() {
  var a = 10;
  var b = 20;
  console.log('Addition Number : ' , a+b);
}
addi();


function sub() {
  var a = 20;
  var b = 40;
  console.log('Subtraction Number : ' , a-b);
}
sub();


function functionName() {
  return ('I am a Function');
}


for (var i = 1; i <= 10; i++ ) {
  console.log(i + ' . ' + functionName());
}
