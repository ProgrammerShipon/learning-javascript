
let li = document.createElement('li');
li.className = 'rounded border p-2';
li.setAttribute('title', 'I am Fourth Item');
li.innerHTML = 'Five';
let list = document.getElementById('list');
list.appendChild(li)


// Create Function
function createElement (tag, className, Text) {
  let tagN = document.createElement(tag);
  tagN.className = className || ' ';
  tagN.innerHTML = Text || ' ';
  return tagN
}
function appendC(parent, children) {
  children.forEach(child => parent.appendChild(child));
}

// Make
let lis = createElement('li', 'rounded border p-2', 'six');
appendC(list, [lis])

let p1 = createElement('p', 'lead text-xl mb-4 w-3/4 text-center mx-auto', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, et blanditiis sed corporis facere accusantium rem aut quo eaque quia dolor. Ea dolorem, illum facere voluptatum, laudantium labore eum culpa ipsa totam at molestiae consequatur sequi nam! Expedita nulla, quasi ipsum odit eligendi voluptate aliquid optio iure debitis reprehenderit omnis sunt numquam repellat officia inventore, pariatur necessitatibus. Eveniet, impedit. Aut!');

let p2 = createElement('p', '', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, et blanditiis sed corporis facere accusantium rem aut quo eaque quia dolor. Ea dolorem, illum facere voluptatum, laudantium labore eum culpa ipsa totam at molestiae consequatur sequi nam! Expedita nulla, quasi ipsum odit eligendi voluptate aliquid optio iure debitis reprehenderit omnis sunt numquam repellat officia inventore, pariatur necessitatibus. Eveniet, impedit. Aut!');

let div = createElement('div')
appendC(div, [p1, p2])
// console.log(div)

// list.insertAdjacentElement('afterbegin', div) // in list Element top
// list.insertAdjacentElement('beforeend', div) // in list Element bottom
// list.insertAdjacentElement('beforebegin', div) // out list Element top
list.insertAdjacentElement('afterend', div) // out list Element bottom

let lastChild = list.lastElementChild.cloneNode();
let lastChildt = list.lastElementChild.cloneNode(true);
lastChildt.innerHTML = 'Seven'
appendC(list, [lastChild, lastChildt])
console.log(lastChild)

// setTimeout ( () => {
//   firstChild.innerHTML = firstChild.innerHTML + ' ( Modified ) ';
// }, 4000)

setTimeout(() => {
  lastChildt.classList.add('text-green-500')
}, 2000);

// setTimeout(() => {
//   list.lastChild.remove()
// }, 3000);

