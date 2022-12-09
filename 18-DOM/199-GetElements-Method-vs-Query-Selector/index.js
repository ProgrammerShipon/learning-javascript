
let liEle = document.getElementsByTagName('li');
console.log(liEle);
console.log('Constructor name')
console.log(liEle.constructor.name)

console.log(' ')

let liQuery = document.querySelectorAll('li')
console.log(liQuery)
console.log('Constructor name')
console.log(liQuery.constructor.name)

let ul = document.querySelector('ul');
console.log('ul.children & ul.childNodes')
console.log(ul.children);
console.log(ul.childNodes)