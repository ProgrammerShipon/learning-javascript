
function changeToInt (v) {
  let result = Number.parseInt(v)
  if(!result) {
    return  ('Please Provide a value which is able to convert in Integer');
    
  }
  return result
}
let result = changeToInt('23.42');
console.log(result);

let resultI = changeToInt('sdf23.42');
console.log(resultI);

let result3 = changeToInt('24.42sdfs');
console.log(result3);