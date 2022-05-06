let elements = document.querySelectorAll("div");

function secondMove() {
  let setInt = setInterval(function () {
    let theDate = new Date();
    console.log(theDate.getSeconds());
    let styleRotate = `transform:rotate(${theDate.getSeconds() * 10}deg)`;
    elements[3].style = styleRotate;
  }, 1000);
}
function minuteMove() {
  let setInt = setInterval(function () {
    let theDate = new Date();
    let styleRotate = `transform:rotate(${theDate.getMinutes() * 10}deg)`;
    elements[2].style = styleRotate;
  }, 1000);
  let theDate = new Date();
}
function hourMove() {
  let setInt = setInterval(function () {
    let theDate = new Date();
    let styleRotate = `transform:rotate(${theDate.getHours() * 10}deg)`;
    elements[1].style = styleRotate;
  }, 1000);
  let theDate = new Date();
}

function clockWork() {
  secondMove();
  minuteMove();
  hourMove();
}

clockWork();
