
  // Object Oriented

  var rect = {
    width: 10, // ei gulo properties
    height: 20,
  
    calculateAreas: function() { // methods =  function
      return this.width * this.height;
    },
    calculateRanges: function() {
      return 2 * (this.width + this.height);
    }
  }
  
  var area = rect.calculateAreas();
  var range = rect.calculateRanges();
  
  
  