var inputArray = [2,3,4];

// None of the action will change array but create new array or new collection

inputArray.forEach(function(x){
  //takes a function and applied it to the everyitem in an array
  console.log(x)
})

var arrayMapped = inputArray.map(function(element){
  return element * 2;
})

console.log(arrayMapped);



