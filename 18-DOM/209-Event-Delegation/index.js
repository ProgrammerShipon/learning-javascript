let box = document.getElementById('box');
box.addEventListener('mousemove', function (e) {
  // document.getElementById('x-value').innerHTML = e.clientX;
  // document.getElementById('y-value').innerHTML = e.clientY;
  document.getElementById('x-value').innerHTML = e.offsetX;
  document.getElementById('y-value').innerHTML = e.offsetY;
  if (e.offsetX === 50 && e.offsetY) {
    alert ( '50, 50' )
  }
})
let btn = document.getElementById('btn');
// btn.onclick = function () {
//   alert (' Click Event !');
// }

let list = document.getElementById('list');
btn.addEventListener('click', function (e) {
  let item = list.lastElementChild.cloneNode(true);
  let name =  prompt (' Enter Name : ');
  item.innerHTML = name;
  list.appendChild(item);
});

// Event Delegation Problem
// [...list.children].forEach (li => {
//   li.onclick = function (e) {
//     e.target.remove();
//   }
// })

list.addEventListener('click', function (e) {
  if ( this.contains(e.target) ) {
    e.target.remove();
  }
})