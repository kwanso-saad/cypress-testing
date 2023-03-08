import fetch from 'node-fetch';
console.log('Start');

// Synchronous operation
const num1 = 10;
const num2 = 20;

// Microtask
Promise.resolve().then(() => {
  console.log('Microtask 1');
});

// Timer-based callback
setTimeout(() => {
  console.log('Timeout 1');
}, 0);

// I/O-based callback
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data: any) => {
    console.log('I/O callback 1', data.title);
  });

// Microtask
Promise.resolve().then(() => {
  console.log('Microtask 2');
});

// Timer-based callback
setTimeout(() => {
  console.log('Timeout 2');
}, 0);

console.log('End');
