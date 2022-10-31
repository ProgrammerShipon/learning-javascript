

function something ( greet , name ) {
  function sayHi () {
    console.log(greet , name);
  }

  sayHi();
}
something('Good Morning, ', 'Shipon Hossen Raju');

function somethings(greet, name) {
  function getFirst() {
    if ( name ) {
      return name.split(' ')[0]
    } else {
      return '';
    }
  }

  var message = greet + ' ' + getFirst();
  console.log(message);
}

somethings('Good Morning, ', 'Shipon Hossen Raju');
somethings('Good Morning, ')