function setTime() {
  var date = new Date();
  var secondsDeg = ((date.getSeconds()) * 6) + 90;
  var minutesDeg = ((date.getMinutes()) * 6) + 90;
  var hoursDeg = ((date.getHours() % 12) * 30) + 90;

  document.querySelector('.second').style.transform = `rotate(${secondsDeg}deg)`;
  document.querySelector('.minute').style.transform = `rotate(${minutesDeg}deg)`;
  document.querySelector('.hour').style.transform = `rotate(${hoursDeg}deg)`;
}

function init() {
  setTime();
  setInterval(setTime, 1000);
}


window.onload = init;