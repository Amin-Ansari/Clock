let times = document.querySelectorAll("div");
setInterval(function () {
  currentTime = new Date();
}, 1000);

clockWork();

function clockWork() {
  secondMove();
}
function secondMove() {
  setInterval(function () {
    times[3].style.transform = `rotateZ(${currentTime.getSeconds() * 10}deg)`;
  }, 1000);
}
