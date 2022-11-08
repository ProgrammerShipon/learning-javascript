console.clear();

class Person {
  constructor (name, email) {
    this.name = name;
    this.email = email;
  }

  print () {
    console.log(this.name , this.email)
  }

  static create (str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email)
  }
}
let str = '{"name": "Shipon Hossen", "email": "shipon.h.r@gmail.com"}'
let str2 = '{"name": "Raju", "email": "raju.h.r@gmail.com"}'
let p1 = Person.create(str);
let p2 = Person.create(str2);
console.log(p1);
console.log(p2);

p1.print()
p2.print()

console.log(p1 instanceof Person)
console.log(p2 instanceof Person)

