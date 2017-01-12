var objects = document.querySelectorAll('.object');
objects.forEach(function(item){
    item.addEventListener('touchmove', function(event){
        // if there is one finger in the event
        if(event.targetTouches.length == 1){
            var touch = event.targetTouches[0];
            // place the element where it is
            item.style.left = touch.pageX + 'px';
            item.style.top = touch.pageY + 'px';
        }
        
    }, false);
})

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.addEventListener('touchmove', function(event){
    event.preventDefault();
    for (var i = 0; i < event.touches.length; i++) {
        var touch = event.touches[i];
        ctx.beginPath();
        ctx.arc(touch.pageX,touch.pageY,50, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.strokeStyle = 'steelblue';
        ctx.stroke();
    }
    
}, false)

window.addEventListener('click', function(){

}, )