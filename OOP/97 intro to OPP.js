
// Chapter Eleven
`Introduction to OOP (Object Oriented Programming)`

// OPP ; Object Oriented Programming 
  `Object Oriented Programming is a programming paradigm based on the concept of 'objects' , which can contain data, in the form of fields(often known as attributes), and code , in the form of procedures (often known as methods ). [Source - Wikipedia]`


  // Procedural start

var width = 10;
var height = 20;

function calculateArea(width, height) {
  return width * height;
}

function calculateRange(width, height) {
  return 2 * (width + height)
}

var area = calculateArea(width , height);
var range = calculateRange(width , height);

  // Procedural end


  // Object Oriented

var rect = {
  width: 10,
  height: 20,

  calculateAreas: function() {
    return this.width * this.height;
  },
  calculateRanges: function() {
    return 2 * (this.width + this.height);
  }
}

var area = rect.calculateAreas();
var range = rect.calculateRanges();









