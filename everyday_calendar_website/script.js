//. store data in local storage
localStorage.setItem('name', 'mario');
localStorage.setItem('age', '50');

//. getting data from local storage
let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age);

//. deleting data from local storage
// localStorage.removeItem('age');
localStorage.clear();

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);