console.log(console.clear())
let list = document.getElementById('list');
console.log(list)
console.log(list.attributes)
console.log(list.getAttributeNames())
console.log(list.getAttributeNode('id'))
console.log(list.getAttributeNode('class'))
console.log(list.classList)
let lastchild = list.lastElementChild;
lastchild.id = 'last-items'
console.log(lastchild)
let attr = document.createAttribute('title');
attr.value = 'I am Title';
lastchild.setAttributeNode(attr)
console.log(lastchild)




