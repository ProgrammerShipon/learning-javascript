
function mixin (target , ...sources) {
  Object.assign(target.prototype, ...sources);
}

const  canWalk = {
  walk: function () {
    console.log('Walking...')
  }
}

const canEat = {
  eat: function () {
    console.log('Eating ...')
  }
}

const canWim = {
  swim: function () {
    console.log('Swimming...')
  }
}

// const person = Object.assign({}, canWalk, canEat);
// person.name = 'Shipon Hossen Raju'

function Person (name) {
   this.name = name
}
mixin(Person, canWalk , canEat);
const person = new Person('Shipon Hossen Raju')
console.log(person)


function GoldFish (name) {
  this.name = name;
}
mixin(GoldFish, canEat, canWalk);
const fish = new GoldFish('bla bla bla');
console.log(fish)