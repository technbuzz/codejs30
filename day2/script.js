const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
    console.log(this);
}

inputs.forEach(function(e){
    e.addEventListener('change', handleUpdate);
})