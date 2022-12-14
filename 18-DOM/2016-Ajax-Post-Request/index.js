// const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

// const load = document.getElementById('load');
// let postList = document.getElementById('posts');

// load.addEventListener('click', function () {
//   fetch(baseUrl)
//     .then(response => response.json())
//     .then(posts => {
//       posts.forEach((post, index) => {
//         let items = listItemGenerator( index+1 , post)
//         // console.log(post)
//         // console.log(items)
//         postList.appendChild(items)
//       })
//     })
//     .catch(e => console.log(e.message))
// })

// function listItemGenerator(no , item) {
//   let li = document.createElement('li');
//   li.className = 'border p-3';
//   li.innerHTML = `${no} . ${item.title}`;

//   return li
// }


const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
let postForm = document.getElementById('post-form');
let postNow = document.getElementById('post-now')

postForm.addEventListener ( 'submit' , function (e) {
  e.preventDefault();

  let title = this.title.value || undefined
  let body = this.body.value || undefined

  if( title && body ) {
    let postObj = {
      userId : 100,
      title,
      body
    }
    fetch ( baseUrl , {
      method: 'POST',
      headers: {
        'Content-type': 'Application/JSON'
      }, 
      body: JSON.stringify(postObj)
    })
    .then ( respon => respon.json())
    .then ( post => {
      let item = listItemGenerator(post)
      postNow.appendChild(item);
      console.log(item)
      // this.reset();
    })
    .catch( e => console.log(e.message))
  }
})

function listItemGenerator(item) {
  let li = document.createElement('li');
  li.className = 'border p-3';
  li.innerHTML = `${item.id} . ${item.title} By User Id - ${item.userId}`;

  return li
}





