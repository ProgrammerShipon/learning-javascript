console.clear();

// Object Destructuring
let person = {
  nam: 'Shipon Hossen Raju',
  email: 'shipon@gmail.com',
  address: {
    city: 'Dhaka',
    country: 'Bangladesh'
  }
}
let { nam, email,address, address:{city, country}} = person
// console.log(nam, email, address, city, country);


// Array Destructuring
let arr = [1, 2, 3, 4, 5, 6];
let [first, second, third, , , last] = arr
console.log(first, second, third, last)
