const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

const load = document.getElementById('load');
let postList = document.getElementById('posts');

load.addEventListener('click', function () {
  fetch(baseUrl)
    .then(response => response.json())
    .then(posts => {
      posts.forEach((post, index) => {
        let items = listItemGenerator( index+1 , post)
        // console.log(post)
        // console.log(items)
        postList.appendChild(items)
      })
    })
    .catch(e => console.log(e.message))
})

function listItemGenerator(no , item) {
  let li = document.createElement('li');
  li.className = 'border p-3';
  li.innerHTML = `${no} . ${item.title}`;

  return li
}