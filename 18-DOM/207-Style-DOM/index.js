
let title = document.getElementById('title');
title.style.color = '#f00';
title.style.fontSize = '3rem';
title.style.background = '#000';

let styleObj = {
  background: 'black',
  fontSize: '30px',
  color: '#efefef'
}

let list = document.getElementById('list');
 
[...list.children].forEach(li => Object.assign(li.style, styleObj))
// Object.assign(list.style, styleObj)
