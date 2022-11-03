// function testMe() {
//    console.log(this)
// }
// testMe();

// let obj = {
//   name: 'Shipon Hossen Raju',
//   print: function () {
//     console.log(this);
//   }
// }
// obj.print();


// let obj = {
//   name: 'Shipon Hossen Raju',
//   print: () => {
//     console.log(this); // window object k refer kore
//   }
// }
// obj.print();


// let obj = {
//   name: 'Shipon Hossen Raju',
//   print: function () {
//     let self = this
//     setTimeout(function () {
//       console.log('Hello ' + self.name);
//     }, 5000)
//   }
// }
// obj.print();


// let obj = {
//   name: 'Shipon Hossen Raju',
//   print: function () {
//     setTimeout(function () {
//       console.log('Hello ' + this.name);
//     }.bind(this), 5000)
//   }
// }
// obj.print();


let obj = {
  name: 'Shipon Hossen Raju',
  print: function () {
    setTimeout(() => {
      console.log('Hello ' + this.name);
    }, 5000)
  }
}
obj.print();