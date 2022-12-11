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

// onclick remove li
// list.addEventListener('click', function (e) {
//   if ( this.contains(e.target) ) {
//     e.target.remove();
//   }
// })


// Your Name input Field
let names = document.getElementById('name');
names.addEventListener('keypress', function (Event) {
  if (Event.key === 'Enter') {
    document.getElementById('show-name').innerHTML = `Your Name is ${Event.target.value}`;
    Event.target.value = ' '
  }
})


// Skills Selected 
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
};


// Create Duble click Events
list.addEventListener('dblclick', function (events) {
  if ( this.contains(events.target)) {
    let innerText = events.target.innerText;
    events.target.innerHTML = '';
    let inputBox = createInputBox(innerText);
    events.target.appendChild(inputBox);

    inputBox.addEventListener('keypress', function (e) {
      if ( e.key === 'Enter') {
        events.target.innerHTML = e.target.value
      }
    })
  }
})

function createInputBox (value) {
  let inp = document.createElement('input');
  inp.type = 'text';
  inp.className = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
  inp.value = value;
  return inp
}