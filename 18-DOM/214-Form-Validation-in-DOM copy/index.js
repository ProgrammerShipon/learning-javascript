
let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log(this.length)
  // console.log(this.elements[0]);
  // console.log(this['email']);

  let isValid = false;
  let formData = {};
  [...this.elements].forEach(el => {
    // console.log(el.type , el.name , el.value);
    if (el.type !== 'submit') {
      isValid = validator(el)
      if (isValid) {
        formData[el.name] = el.value
      } else {
        alert(`${el.name} is Required`)
      }
    }
  })
  if(isValid) {
    console.log(formData);
    this.reset();
  }
})

function validator (el) {
  if (!el.value) {
    return false
  }
  return true
}
