// 'use strict'
console.clear();

// Private Properties
const _radius = new WeakMap()
const _name = new WeakMap()
const _resize = new WeakMap()

class Circle {
  constructor (radius, name) {
    this.size = 100;
    _radius.set(this, radius);
    _name.set(this, name);
    _resize.set(this, () => {
      console.log(this.size)
    })
  }

  get radius() {
    return _radius.get(this)
  }

  set radius(v) {
    _radius.set(this, v)
  }

  draw() {
    console.log('Drawing....')
    console.log(_radius.get(this), _name.get(this))
    _resize.get(this)()
  }
}

let c1 = new Circle(4, 'circle');
console.log(c1);
c1.draw();

console.log(c1.radius)
c1.radius = 200
console.log(c1.radius)
