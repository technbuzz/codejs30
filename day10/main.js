var inputs = document.querySelectorAll('.item input[type="checkbox"]');
console.log(inputs);

// Highlight the label for checeked inputs
// inputs.forEach(function(input){
//   input.addEventListener('change', function(e){
//     var label = e.target.nextSibling;
//     debugger;
//     if(e.target.checked){
//       label.classList.toggle('hl');
//     } else {
//       label.classList.toggle('hl');
//     } 
//   })
// }, true)
let lastChecked;

//inbetween is a flag variable
var inbetween = false;

function handleChecked(e){
  console.log(e);
  if(e.shiftKey && this.checked){
    for(var i=0; i<inputs.length; i++){
      if(inputs[i]==this || inputs[i] == lastChecked){
        // debugger;
        inbetween = !inbetween;
      }
      if(inbetween){
        inputs[i].checked = true;
      }
    }// for loop
  }//
  
  lastChecked = this;
}

// Do the shift click magic
inputs.forEach(function(input){
  input.addEventListener('click', handleChecked)
})

document.getElementById('all').addEventListener('click', function(e){
  if(e.target.checked){
    inputs.forEach(function(input){
      // debugger;
      input.checked = true;
    })
  } else {
    inputs.forEach(function (input) {
      // debugger;
      input.checked = false;
    })
  }
}, true)


document.getElementById('lead').addEventListener('click', function(e){
  console.log(e);
  
})
