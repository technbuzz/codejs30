const inputs = document.querySelectorAll('.controls input');
function handleUpdate(){
    const mu = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.id}`, this.value + mu);
}

inputs.forEach(function(e){
    e.addEventListener('change', handleUpdate);
    // e.addEventListener('mousemove', handleUpdate);
})