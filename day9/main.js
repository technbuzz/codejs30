var p = document.querySelector('p');
function changeIt(){
  p.style.color = 'green';
  p.style.fontSize = '30px';
}

var version = 'ES6';
var dogs = [{name:'whisky', age:10},{name:'kharoo', age:7}]

// Console Log Features

// Interpolated
// console.log('Hello I am %s. I am Working','💩');
console.log(`Hi, this is ${version} way of Interpolations`);

// Styled
// Unfortunately it doesn't work for me
console.log('%c This is styled', 'color: steelblue, font-size:30px');

// Testing
console.assert(2===1, 'This is Wrong');
console.assert(p.classList.contains('ouch'), 'This is Wrong');


// Viewing Dom elements
console.log(p); // this will only prints the elements
console.dir(p); // this will print p as an object
console.clear();

// Grouping elements
dogs.forEach(function(dog){
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`The ${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
  
})

// Count
console.count('Eman');
console.count('Eman');
console.count('Momina');
console.count('Eman');
console.count('Momina');
console.count('Eman');
console.count('Momina');
console.count('Momina');

// Time
console.time('Fetching');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('Fetching');
    console.log(data);
    

  })


