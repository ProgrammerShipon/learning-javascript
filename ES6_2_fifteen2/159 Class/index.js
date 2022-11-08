console.clear();

function Rectangle (width , height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.draw = function () {
  console.log(this);
  console.log('Drawing')
}
let rect1 = new Rectangle (20, 40)
console.log ( rect1 );
console.log ( typeof rect1 );
console.log ( rect1.draw() );

// Same Work in class

class reactangle {
  constructor (width , height) {
    this.width = width
    this.height = height
  }

  draw () {
    console.log('Drawing...');
  }
}
let reacta = new reactangle(30, 50);
console.log(reacta);
console.log(typeof reacta)



