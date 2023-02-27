// Add item to an object
const city = undefined;

const person = {
  name: 'Jack',
  ...(city ? {city} : {}),
}

console.log(person);
// { name: 'Jack' }
console.log(Object.keys(person));
// [ 'name' ]


// SetTimeout in a better way
function wait() {
  return new Promise((resolve) => {
     setTimeout(resolve, 1000);
  });
}
async function log() {
  console.log('Foo');
  await wait();
  console.log('Bar');
}


// Copy an array in different ways:
const orig_array = [1, 2, 3];

const copied_array = [...orig_array]; // spread operator
const copied_array = orig_array.slice();
const copied_array = Array.from(orig_array);

console.log(copied_array); 
// [1, 2, 3]


// Array to Object (a better way)
let arr = ['val1', 'val2', 'val3'];
let arrObject = { ...arr };


// Short cirtuit conditionals
// simple way:
if (online) {
  getData();
}
// advanced:
online && getData();


// Ternary operator
// instead of this:
let hungry = true;
let eat;
if (hungry == true) {
  eat = 'yes';
} else {
  eat = 'no';
}
// do this:
let hungry = true;
let eat = hungry == true ? 'yes' : 'no';
