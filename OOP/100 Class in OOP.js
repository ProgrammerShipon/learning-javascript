
// Class is Just a 'factory' to create multiple object without code 'duplication'

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
  calculateRange () {
    return 2 * (this.width + this.height)
  }
}

var rect = new Rect(10, 20)
var rect2 = new Rect(70, 40)
var rect3 = new Rect(7, 6)