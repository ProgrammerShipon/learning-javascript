
// First Class Function

function add(a, b) {
  return a + b;
}

// 1. A Function can be stored in a Variable

var sum = add
console.log('check typeof : ' , typeof sum);
console.log('Function to Variable : ' , sum(4, 5));

// 2. A Function can be Stored in an Array

var arr = []
arr.push(add)
console.log('check typeof : ' , typeof arr)
console.log('Function to Array : ' + arr[0](5,3))

// 3. A Function can be Stored in an Object

var obj = {
  sum: add
}
console.log('check typeof : ' , obj)
console.log('Function to Object : ' + obj.sum(7, 9))

// 4. We can Create Function as Need
setTimeout(function () {
  console.log('I have created....')
}, 100 )

// 5. We Can pass Function  as an Arguments
`Next Video`
// 6. We can return Functions from Another Function







