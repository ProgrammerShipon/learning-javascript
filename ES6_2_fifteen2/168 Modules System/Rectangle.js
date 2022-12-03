import Shape from "./Shape.js"

export default class Rectangle extends Shape {
  constructor (color, width, height ) {
    super (color);
    this.width = width
    this.height = height
  }
  drow () {
    console.log('it is drowing...')
  }
}

