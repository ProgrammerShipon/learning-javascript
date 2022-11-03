console.clear();

var s = 'lksadfhahgadskij';
console.log(s)

// Template String
var p = `
lkasjdfkasf
aklsd flasdkf
asdfl asdf
   alsdkjf`
console.log(p)

var age = 17;
var names = 'Shipon Hossen Raju'
console.log('My Name is ' + names + 'and i am ' + age + ' years old');
console.log(`'My Name is ${names} and i am ${age < 18 ? 'Not ': ''}years old'`);


// New Method
var nam = 'shipon';
console.log(nam.padStart(15, ' @'));
console.log(nam.padEnd(15, ' #'));
console.log('s'.repeat(5));
