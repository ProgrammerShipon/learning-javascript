

function addAll() {
  var sum = 0;
  for ( var i = 0; i <= ( arguments.length - 1 ); i++ ) {
    sum += arguments[i];
  }
  return sum;
}

var result = addAll(3,2,5,4,3);
console.log(result);



function person(name, email) {
  return {
    name: name,
    email: email
  }
}

var p1 = person('Shipon Hossen Raju', 'shiponwe.23sds.@gmail.com');
console.log(p1);



function person(name, email) {
  return {
    name: name,
    email: email
  }
  console.log('return er porer kono code kaj kore na');
}
