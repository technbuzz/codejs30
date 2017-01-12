var objects = document.querySelectorAll('.object');
const width = window.innerWidth-50;
const height = window.innerHeight-50;
objects.forEach(function(item){
    item.addEventListener('touchmove', function(event){
        // if there is one finger in the event
        var pageX = event.targetTouches[0].pageX;        
        var pageY = event.targetTouches[0].pageY;
        
        console.log(width,height);
        

        if(pageX < 0 || pageY < 0 || pageX > width || pageY > height) return;

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
    
}, false);