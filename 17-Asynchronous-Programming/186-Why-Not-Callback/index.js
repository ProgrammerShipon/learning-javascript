const Base_Url = 'https://jsonplaceholder.typicode.com'

function getRequest (url , callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('get', url);
  xhr.onreadystatechange = function (event) {
    if (xhr.readyState === 4) {
      if ( xhr.status === 200 ) {
        let respons = JSON.parse(xhr.response)
        callback(null, respons)
      } else {
        callback ( xhr.status, null )
      }
    }
  }
  xhr.send();
}

getRequest(`${Base_Url}/posts/1`, (err, res) => {
  if (err) {
    throw new Error ('Error Occurred');
  }
  getRequest(`${Base_Url}/posts/1/comment  s`, (err , res) => {
    if (err) {
      throw new Error ('Error Occurred')
    }
    // console.dir(res[0].id);
    console.log(res[0].id);
    console.log(res);
  })
})
