function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('playing');
  if(!audio) return; //There is no key binding
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', function(e){
  e.preventDefault();
  playSound(e);
});





