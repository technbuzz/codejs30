const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('progress');
const bar = player.querySelector('progress__filled');
const toggle = player.querySelector('.toggle');
const skipBtn = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


// Functions
function togglePlay(){
  if(video.paused){
    video.play();
  } else {
    video.pause();
  }
}

function updateButton(){
  const text = this.paused ? 'Play' : 'Pause';
  toggle.textContent = text;
}

function skip(){
  console.log('Skipping');
  console.log(this.dataset);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  console.log(this.value);
  debugger;
  const rangeType = this.name;
  video[rangeType] = parseFloat(this.value);
  
}

// Events Handling
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipBtn.forEach(function(button){
  button.addEventListener('click', skip);
});

ranges.forEach(function(range){
  range.addEventListener('click', handleRangeUpdate);
});






