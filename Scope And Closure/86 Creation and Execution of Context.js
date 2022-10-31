
// Execution Context

function a() {
  b()
  console.log('I am function A')
}

function b() {
  c()
  console.log('I am function B')
}

function c () {
  d()
  console.log('I am function C')
}

function d() {
  // c()
  console.log('I am function D')
}

var x = 100;
a();
console.log('I am Global');

// Creation Phase
// Executional Phase 