let times = document.querySelectorAll("div");
setInterval(function () {
  currentTime = new Date();
}, 1000);

clockWork();

function clockWork() {
  secondMove();
  minuteMove();
  hourMove();
}
function secondMove() {
  setInterval(function () {
    times[3].style.transform = `rotate(${currentTime.getSeconds() * 6}deg)`;
  }, 1000);
}
function minuteMove() {
  setInterval(function () {
    times[2].style.transform = `rotate(${currentTime.getMinutes() * 6}deg)`;
  }, 1000);
}
function hourMove() {
  setInterval(function () {
    times[1].style.transform = `rotate(${currentTime.getHours() * 30}deg)`;
  }, 1000);
}
