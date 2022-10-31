
var persons = [
  {
    name: 'A',
    age: 24
  },
  {
    name: 'B',
    age: 21
  },
  {
    name: 'C',
    age: 34
  },
  {
    name: 'D',
    age: 13
  }
]
console.log('Original Object : ')
for (var i = 0; i < persons.length; i++ ){
  console.log(persons[i])
}

persons.sort(function(a , b){
  if (a.age > a.age) {
    return 1
  } else if ( a.age < b.age ) {
    return -1
  } else {
    return 0;
  }
})
console.log(persons);

var arr = [3,5,3,4,7,5,32,7,8,5,3,-5,4,64,3,4,5,75,-2,4,2];
console.log('Original Array : ' + arr);
// arr.sort()

arr.sort(function (a, b) {
  if (a > b) {
    return 1
  } else if ( a < b ) {
    return -1
  } else {
    return 0
  }
})

console.log('Create system : ' , arr);

var arr1 = [3,2,4,6,54,3,2,3,45,6,7,8,9,65,-34]
var res1 = arr1.every(function(value){
  return value % 2 === 0;
})
console.log('jodi odd number thake : ' +  res1);

var res2 = arr1.every(function(value){
  return value >= 0;
})
console.log(res2);

// ekta holeo odd number thakle true
var res3 = arr1.some(function (value){
  return value % 2 === 1;
})
console.log(res3);

// ektao nagative number thakle true
var res4 = arr1.some(function(value){
  return value < 0
})
console.log(res4);
