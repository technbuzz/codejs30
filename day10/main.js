var inputs = document.querySelectorAll('input[type="checkbox"]');
console.log(inputs);

inputs.forEach(function(input){
  input.addEventListener('change', function(e){
    var label = e.target.nextSibling;
    console.log(e.target.checked);
    if(e.target.checked){
      label.classList.toggle('hl');
    } else {
      label.classList.toggle('hl');
    }
  })
})
