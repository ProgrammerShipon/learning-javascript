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


let names = document.getElementById('name');
names.addEventListener('keypress', function (Event) {
  if (Event.key === 'Enter') {
    document.getElementById('show-name').innerHTML = `Your Name is ${Event.target.value}`;
    Event.target.value = ' '
  }
})

let skills = document.getElementsByName('skills');
let result = document.getElementById('result');

let checkedSkills = [];

[...skills].forEach(skill => {
  skill.addEventListener('change', function (events) {
    if ( events.target.checked ) {
      checkedSkills.push(events.target.value);
      outputSkills(result, checkedSkills)
    } else {
      let ind = checkedSkills.indexOf(events.target.value);
      checkedSkills.splice(ind, 1);
      outputSkills(result, checkedSkills)
    }
  })
})

function outputSkills (parent, skills) {
  let result = '';
  skills.forEach((skill, index) => {
    result += `(${index + 1}) ${skill}  `;
  })
  parent.innerHTML = result
}
