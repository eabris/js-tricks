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
