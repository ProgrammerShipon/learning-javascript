
let list = document.getElementsByTagName('li');

// let listItems = Array.from(list)
// console.log(listItems)
// let listItems = Array.prototype.slice.apply(list)
let listItems = [...list]

listItems.forEach((li, ind) => {
  let text = li.innerHTML
  li.innerHTML = `(${ind + 1}) ${text}`
})