
function Person(name) {
   this.name = name;
}
Person.prototype.PI = 3.1416;

var p1 = new 
Person('Shipon Hossen Raju');
console.log(Object.getPrototypeOf(p1));
// p1.__proto__
console.log(Person.prototype);

